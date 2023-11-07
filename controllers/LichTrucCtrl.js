const LichTrucSchema = require("../models/LichTrucModel")


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

const LichTrucCtrl = {
    create: async(req, res) => {
        try{
            const {NgayTruc,CaTruc} = req.body
            const ngay = new Date();
            console.log(ngay)
            const ngaytruc = new Date(NgayTruc);
            if(ngaytruc<ngay )
                return res.status(400).json("Vui lòng chọn ngày khám lớn hơn ngày hiện tại")
            if(GioKham<7 && GioKham>17)
                return res.status(400).json("Vui lòng chọn thời gian trong giờ làm việc")
         
            // const newlichtruc = new LichTrucSchema({NgayTruc,CaTruc})
            // await newlichtruc.save()
            res.json("Thêm lịch trực thành công")

            
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }, 
    delete: async(req, res) => {
        try{
            await LichTrucSchema.findByIdAndDelete(req.params.id)
            res.json({msg:"Xóa lịch hẹn thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    // read: async(req,res)=>{
    //     try{
    //       const lichhen= await LichTrucSchema.find()
    //       res.json({lichhen:lichhen})
    //     }catch(error){
    //         return res.status(500).json({msg: error.message})
    //     }  
    // },

    read: async (req,res) =>{
        try{
            // const room = await lichhenchema.find();
            // res.json({room:room})
            const features = new APIfeatures(LichTrucSchema.find(), req.query).filtering()

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
            const {TenBS, HinhAnhBS}  = req.body
            await LichTrucSchema.findByIdAndUpdate({_id:req.params.id},{HoTen,DiaChi,Email,GioiTinh,SĐT,NgaySinh,ngaytruc,MoTa} )
            res.json({msg:"Cập nhật thành công"})
        }catch(error){

        }
    },
}
module.exports = LichTrucCtrl