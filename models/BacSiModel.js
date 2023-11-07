const mongoose = require("mongoose")

const BacSiSchema = new mongoose.Schema({
    MaBS:{
        required: true,
        type: String,
        Trim: true
    },
    TenBS:{
        required: true,
        type: String,
        Trim: true
    },
    NgaySinhBS:{
        // required: true,
        type: Date,
        Trim: true
    },
    GioiTinhBS:{
        // required: true,
        type: String,
        Trim: true
    },
    SDT:{
        // required: true,
        type: Number,
        Trim: true
    },
    Email:{
        // required: true,
        type: String,
        Trim: true
    },
    ChucVu:{
        // required: true,
        type: String,
        Trim: true
    },
    KinhNghiem:{
        // required: true,
        type: String,
        Trim: true
    },
    ChuyenKhoa:{
        // required: true,
        type: String,
        Trim: true
    },
    GioiThieuBS:{
         // required: true,
         type: String,
         Trim: true
    },
    HinhAnhBS: {
        type: Object,
        // required: true,
    },
    // LichTruc:{
    //     type: Array,
    //     default:[] 
    // },
    // LichHen:{
    //     type: Array,
    //     default:[] 
    // }
},{
    timestamp:true
})
module.exports = mongoose.model("BacSi", BacSiSchema)