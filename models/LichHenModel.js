const mongoose = require("mongoose")

const LichHenSchema = new mongoose.Schema({
    HoTen:{
        required: true,
        type: String,
        Trim: true
    },
    DiaChi: {
        required: true,
        type: String,
        Trim: true
    },
    Email: {
        required: true,
        type: String,
        Trim: true
    },
    GioiTinh: {
        required: true,
        type: String,
    },
    SĐT: {
        required: true,
        type: Number,
    },
    NgaySinh: {
        required: true,
        type: String,
    },
    NgayKham: {
        required: true,
        type: String,
        Trim: true
    },
    GioKham: {
        required: true,
        type: String,
        Trim: true
    },
    MoTa: {
        required: true,
        type: String,
        Trim: true
    },
    ChuyenKhoa:{
        type: String,
        Trim: true
    },
    BacSi:{
        type: String,
        Trim: true
    },
    TrangThai: {
        type: String,
        Trim: true
    },
},{
    timestamp:true
})
module.exports = mongoose.model("LichHen", LichHenSchema)