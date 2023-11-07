const LichHenSchema = require("../models/LichHenModel")

const sendMail = require("../hellpers/sendMail")



const EmailCtrl = {
   
    sendmail: async(req, res) => {
        try{
            const {Email,HoTen,NgayKham,GioKham}  = req.body
            console.log(Email,HoTen,NgayKham,GioKham)
            const response = await sendMail(Email,HoTen,NgayKham,GioKham)
            res.json(response)
            

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
       
    },
}
module.exports = EmailCtrl