const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
        Trim: true
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: Number,
        default: 0
    }
},{
    timestamp:true
})
module.exports = mongoose.model("users", UserSchema)