// const jwt = require('jsonwebtoken')
const Users = require('../models/UserModel')

const authAdmin = async (req, res, next) =>{
    try {
       // Lấy thông tin từ id
       const user = await Users.findOne({
            _id: req.user.id
       })
       if(user.role === 0 )
            return res.status(400).json({msg:"Từ chối quyền truy cập vào tài nguyên"})
        next()
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

module.exports = authAdmin