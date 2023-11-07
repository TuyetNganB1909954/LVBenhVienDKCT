const LichHenSchema = require("../models/LichHenModel")



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

const LichHenCtrl = {
    create: async(req, res) => {
        try{
            const {HoTen,DiaChi,Email,GioiTinh,SĐT,NgaySinh,NgayKham,GioKham,MoTa,ChuyenKhoa,BacSi,TrangThai} = req.body
            const ngay = new Date();
            const ngaykham = new Date(NgayKham);
            console.log(GioKham)
            if(ngaykham<ngay )
                return res.status(400).json("Vui lòng chọn ngày khám lớn hơn ngày hiện tại")
            if(GioKham<7 && GioKham>17)
                return res.status(400).json("Vui lòng chọn thời gian trong giờ làm việc")
         
            const newlichhen = new LichHenSchema({HoTen,DiaChi,Email,GioiTinh,SĐT,NgaySinh,NgayKham,GioKham,MoTa,ChuyenKhoa,BacSi,TrangThai})
            await newlichhen.save()
            res.json("Đặt lịch hẹn thành công")

            
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }, 
    delete: async(req, res) => {
        try{
            await LichHenSchema.findByIdAndDelete(req.params.id)
            res.json({msg:"Xóa lịch hẹn thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    // read: async(req,res)=>{
    //     try{
    //       const lichhen= await LichHenSchema.find()
    //       res.json({lichhen:lichhen})
    //     }catch(error){
    //         return res.status(500).json({msg: error.message})
    //     }  
    // },

    read: async (req,res) =>{
        try{
            // const room = await lichhenchema.find();
            // res.json({room:room})
            const features = new APIfeatures(LichHenSchema.find(), req.query).filtering()

            const lichhen = await features.query

            res.json({
                // status: 'success',
                // result: products.length,
                lichhen: lichhen
            })
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    update: async(req, res) => {
        try{
            const {HoTen,DiaChi,Email,GioiTinh,SĐT,NgaySinh,NgayKham,MoTa,BacSi,TrangThai}  = req.body
            await LichHenSchema.findByIdAndUpdate({_id:req.params.id},{HoTen,DiaChi,Email,GioiTinh,SĐT,NgaySinh,NgayKham,MoTa,BacSi,TrangThai} )
            res.json({msg:"Cập nhật thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    updateState: async (req, res) => {
        try{
            const {TrangThai} = req.body
            console.log(TrangThai)
            await LichHenSchema.findByIdAndUpdate({_id:req.params.id},{TrangThai})
            res.json("Cập nhật trạng thái lịch hẹn thành công")
        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    }

       
 
}
module.exports = LichHenCtrl