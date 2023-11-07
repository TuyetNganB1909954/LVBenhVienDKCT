const UserSchema = require('../models/UserModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserCtrl = {
    register: async(req, res) => {
        try{
            const {name, password} = req.body
            const User = await UserSchema.findOne({name})
            if(User)
                return res.status(400).json({msg:"Tên đăng nhập đá tồn tại"})
            if(password.length < 6)
                return res.status(400).json({msg:"Mật khẩu tối thiểu 6 ký tự"})
            const passwordHash = await bcrypt.hash(password,10)
            const newUser = new UserSchema({
                name, password:passwordHash
            })
            await newUser.save()

        //  Tạo một jsonwebtoken để xác thực
        const accesstoken = createAccessToken({id: newUser._id})
        const refreshtoken = createRefreshToken({id: newUser._id})
        res.cookie('refreshtoken', refreshtoken, {
             httpOnly: true,
             path: '/user/refresh_token',
             
         })
         res.json({accesstoken})

            //  res.json("Them tc")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
        
    },
    login: async (req,res) => {
        const {name, password} = req.body
        const User = await UserSchema.findOne({name})
        // res.json(User)
        if(!User)
            return res.status(400).json({msg:"Tài khoản không tồn tại"})
        const isMatch = await bcrypt.compare(password, User.password)
        if(!isMatch)
            return res.status(400).json({msg:"Mật khẩu không đúng"})
            const accesstoken = createAccessToken({id: User._id})
            const refreshtoken = createRefreshToken({id: User._id})
            res.cookie('refreshtoken', refreshtoken, {
                 httpOnly: true,
                 path: '/user/refresh_token',
                 
             })
             res.json({accesstoken})
       
    },
    logout: async(req, res) => {
        try{
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Đăng xuất thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    getUser: async (req, res) => {
        try{
            const user = await UserSchema.findById(req.user.id)
            if(!user)
                return res.status(400).json({msg: "Người dùng không tồn tại"})
            res.json(user)
           

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
        // res.json('hi')
    },
    getListUser: async (req, res) => {
        try{
            const user = await UserSchema.find()
            res.json({user:user})
           

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
        // res.json('hi')
    },
    refreshtoken: (req, res ) => {
        try{ 
            // res.json('hi')
            const rf_token = req.cookies.refreshtoken;
            // console.log(rf_token)
            if(!rf_token)
                return res.status(400).json({msg:"Chưa đăng nhập"})
                jwt.verify( rf_token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
                    if(error) return res.status(400).json({msg: "Chưa đăng nhập"})
                    const accesstoken = createAccessToken({id: user.id})
                    res.json({accesstoken})
     
                })
            
        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    },
}
const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}
const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'})
}


module.exports = UserCtrl