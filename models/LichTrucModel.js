const mongoose = require("mongoose")

const LichTrucSchema = new mongoose.Schema({
    NgayTruc:{
        required: true,
        type: String,
        Trim: true
    },
    CaTruc: {
        required: true,
        type: String,
        Trim: true
    },


},{
    timestamp:true
})
module.exports = mongoose.model("LichTruc", LichTrucSchema)