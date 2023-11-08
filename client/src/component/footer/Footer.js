import React from 'react'
import logo from'../asset/logo1.png'

function Footer() {
  return (
    <div>
        <div className='bg-white footer'>
            <div className='col-12 d-flex container'>
                <div className='col-4'>
                    <img src={logo}/>
                </div>
                <div className='col-4 footer-contact '>
                    <div>
                        <h3>Thông tin</h3>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="fa-regular fa-calendar-days"></i>
                        <span className='ps-2'>THỜI GIAN LÀM VIỆC</span>
                    </div>
                    <p className=''>
                        THỨ 2 ĐẾN THỨ 7:<br/>Sáng: 6h00 – 11h30<br/>Chiều: 12h30 - 16h00<br/>CHỦ NHẬT:<br/>Sáng: 6h00 – 12h00
                    </p>
                    
                </div>
                <div className='col-4 footer-contact-right '>
                    <div>
                        <h3>Liên hệ</h3>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span className='ps-2'>Số 04 Châu Văn Liêm, P.Tân An, Q.Ninh Kiều, TP.Cần Thơ </span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-phone"></i>
                            <span className='ps-2'>Số cấp cứu 24/7: +321 789 01 2345</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-headset"></i>
                            <span className='ps-2'>Tổng đài: +1-888-987-6543</span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        <div className='footer-final'>
            Thiết kế bởi Nguyễn Thị Tuyết Ngân © 2023 Bệnh viện đa khoa Cần Thơ
        </div>
    </div>
  )
}

export default Footer