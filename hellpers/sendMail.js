const nodemailer = require('nodemailer')
require ("dotenv").config()
const sendEmail = async(Email,HoTen,NgayKham,GioKham) => {
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service:'Gmail',
        // port:587,
        // secure:false,
        auth:{
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // const message = {
    //     from:'ADMIN FROM HOC MAI',
    //     to: email,
    //     subject: subject,
    //     html: html
    // }

    // const result = await transporter.sendMail(message)
    // return result

    let info = await transporter.sendMail({
        from:`tuyetngan241@gmail.com`,
        to:Email,
        subject:"ĐẶT LỊCH HẸN THÀNH CÔNG",
        // text:`<h1>ĐẶT LỊCH HẸN THÀNH CÔNG</h1>`,
        html:`
        <h2> Bệnh nhân ${HoTen} đã đặt lịch hẹn thành công</h2>
        Xin mời bệnh nhân đến thăm khám tại bệnh viện Đa khoa thành phố Cần Thơ<br/>
        Vào lúc: ${GioKham}</br>
        ngày: ${NgayKham}<br/>
        Khi đến thăm khám bệnh nhân mang theo BHYT + CCCD<br/>
        Bệnh nhân vui lòng đến đúng thời gian để được thăm khám Sớm và tốt nhất!
        `
    })
    return info
}

module.exports = sendEmail





