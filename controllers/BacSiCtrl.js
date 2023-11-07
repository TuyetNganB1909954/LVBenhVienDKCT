const BacSiSchema = require("../models/BacSiModel")
class APIfeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query
 
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))
        
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
 
     //    gte = greater than or equal
     //    lte = lesser than or equal
     //    lt = lesser than
     //    gt = greater than
        this.query.find(JSON.parse(queryStr))
          
        return this;
     }
 
}

const BacSiCtrl = {
    create: async(req, res) => {
        try{
            const {MaBS,TenBS,NgaySinhBS,GioiTinhBS,SDT,Email,ChucVu,KinhNghiem,ChuyenKhoa,HinhAnhBS,GioiThieuBS} = req.body
            const bacsi = await BacSiSchema.findOne({TenBS})
            // if(bacsi)
            //     return res.status(400).json("bác sĩ đã tồn tại")
            // if(!bacsi)
            //     return res.status(400).json("Vui lòng nhập thông tin chuyên khoa")
            const newbacsi = new BacSiSchema( {MaBS,TenBS,NgaySinhBS,GioiTinhBS,SDT,Email,ChucVu,KinhNghiem,ChuyenKhoa,HinhAnhBS,GioiThieuBS})
            await newbacsi.save()
            res.json("Thêm bác sĩ thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }, 
    delete: async(req, res) => {
        try{
            await BacSiSchema.findByIdAndDelete(req.params.id)
            res.json({msg:"Xóa bác sĩ thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    // read: async(req,res)=>{
    //     try{
    //       const bacsi= await BacSiSchema.find()
    //       res.json({bacsi:bacsi})
    //     }catch(error){
    //         return res.status(500).json({msg: error.message})
    //     }  
    // },
    read: async (req,res) =>{
        try{
            // const room = await bacsichema.find();
            // res.json({room:room})
            const features = new APIfeatures(BacSiSchema.find(), req.query).filtering()

            const bacsi = await features.query

            res.json({
                // status: 'success',
                // result: products.length,
                bacsi: bacsi
            })
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    update: async(req, res) => {
        try{
            const {MaBS,TenBS,NgaySinhBS,GioiTinhBS,SDT,Email,ChucVu,KinhNghiem,ChuyenKhoa,HinhAnhBS,GioiThieuBS}  = req.body
            // console.log(req.params.id)
            await BacSiSchema.findByIdAndUpdate({_id:req.params.id},{MaBS,TenBS,NgaySinhBS,GioiTinhBS,SDT,Email,ChucVu,KinhNghiem,ChuyenKhoa,HinhAnhBS,GioiThieuBS} )
            res.json({msg:"Cập nhật thành công"})
        }catch(error){

        }
    },

    addLichHenBS: async (req, res) => {
        try{
            const lichen = req.body
            console.log(lichen)
            await BacSiSchema.findByIdAndUpdate({_id: req.params.id},{
                LichHen:lichen 
            })
            return res.json({msg: "Thêm vào giỏ hàng"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    LichTrucBS: async(req, res) => {
        try{
            const {NgayTruc}  = req.body
            const ngay = new Date();
            const ngaytruc = new Date(NgayTruc);
            if(ngaytruc<ngay )
                return res.status(400).json("Vui lòng chọn ngày khám lớn hơn ngày hiện tại")
            
            await BacSiSchema.findByIdAndUpdate({_id:req.params.id},{LichTruc:NgayTruc} )
            res.json({msg:"Phân công lịch trực thành công"})
        }catch(error){

        }
    },
}
module.exports = BacSiCtrl