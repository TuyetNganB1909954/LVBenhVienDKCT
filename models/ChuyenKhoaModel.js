const mongoose = require("mongoose")

const ChuyenKhoaSchema = new mongoose.Schema({
    TenCK:{
        required: true,
        type: String,
        Trim: true
    },
    HinhAnhCK: {
        type: Object,
        // required: true,
    }
},{
    timestamp:true
})
module.exports = mongoose.model("ChuyenKhoa", ChuyenKhoaSchema)