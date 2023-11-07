const ChuyenKhoaSchema = require("../models/ChuyenKhoaModel")

const ChuyenkhoaCtrl = {
    create: async(req, res) => {
        try{
            const {TenCK, HinhAnhCK} = req.body
            const chuyenkhoa = await ChuyenKhoaSchema.findOne({TenCK})
            if(chuyenkhoa)
                return res.status(400).json("Chuyên khoa đã tồn tại")
            // if(!chuyenkhoa)
            //     return res.status(400).json("Vui lòng nhập thông tin chuyên khoa")
            const newChuyenKhoa = new ChuyenKhoaSchema( {TenCK,HinhAnhCK})
            await newChuyenKhoa.save()
            res.json("Thêm chuyên khoa thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }, 
    delete: async(req, res) => {
        try{
            await ChuyenKhoaSchema.findByIdAndDelete(req.params.id)
            res.json({msg:"Xóa chuyên khoa thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    read: async(req,res)=>{
        try{
          const chuyenkhoa= await ChuyenKhoaSchema.find()
          res.json({chuyenkhoa:chuyenkhoa})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }  
        
    },
    update: async(req, res) => {
        try{
            const {TenCK, HinhAnhCK}  = req.body
            await ChuyenKhoaSchema.findByIdAndUpdate({_id:req.params.id},{TenCK, HinhAnhCK} )
            res.json({msg:"Cập nhật thành công"})
        }catch(error){

        }
    },
}
module.exports = ChuyenkhoaCtrl