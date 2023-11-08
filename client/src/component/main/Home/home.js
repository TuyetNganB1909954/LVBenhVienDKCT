import React from 'react'
import CK1 from'../../asset/chuyen_khoa.png'
import CK2 from'../../asset/phong_dich_vu.png'
import CK3 from'../../asset/giuong_luu_benh.png'
import CK4 from'../../asset/phong_chuc_nang.png'
import why from'../../asset/why_choose_us.jpg'
import S1 from'../../asset/kham_suc_khoe_ca_nhan.png'
import S2 from'../../asset/cap_cuu_247.png'
import S3 from'../../asset/kham_suc_khoe_cong_ty.png'
import BenhVien from'../../asset/benh_vien.png'
import Slider from '../../slider/slider'
import Bacsi from '../bacsi/Bacsi'
import Chuyenkhoa from '../chuyenkhoa/Chuyenkhoa'
import Footer from '../../footer/Footer'
import Facebook from '../../facebook/Facebook'


function home() {
  return (
    <>
      <Slider/>
      <div className='home-strong'>
        <div className='container'>
          <div className='col-12 home-item home-item-introduce ' >
            <div className='col-xm-6  home-item-introduce-content'>
              <h1>Bệnh viện đa khoa cần thơ</h1>
              <p>
                Bệnh Viện Đa Khoa Cần Thơ là địa chỉ uy tín về khám chữa bệnh, với đội ngũ chuyên gia - bác sĩ hàng đầu, trang thiết bị hiện đại, cùng các phác đồ điều trị hiệu quả, khoa học mang đến dịch vụ khám, điều trị, chăm sóc sức khỏe cao cấp, toàn diện với chi phí hợp lý.
              </p>
            </div>
            <div className='col-6 text-center home-item-introduce-video '>
                <img src={BenhVien} className='img-fluid'/>
            </div>
          </div>
      

          <div className=' home-item bg-white '>
            <div className='text-center'>
              <h2>Cơ sở vật chất</h2>
            </div>
              <div className=''>
                <p>
                Bệnh viện được xây dựng với tổng diện tích hơn 18.000m2, kiến trúc bố trí khoa học với 14 tầng phục vụ cho việc khám, chữa bệnh và 2 tầng hầm. Phòng khám và khu điều trị tập trung trong 1 tòa nhà, 6 thang máy, trong đó, có 2 thang chuyển bệnh, tiện lợi cho việc di chuyển.

Khu khám sức khỏe công ty rộng rãi, tiện lợi, quy trình khám chặt chẽ, nhanh chóng, các xét nghiệm được thực hiện tại chỗ.
                </p>
              </div>
              <div className='col-12 home-infrastructure pt-3'>
                <div className='col-md-3 home-infrastructure-item  '>
                  <div className='col-sm-3 '>
                    <img src={CK1} className=' w-100 p-2'/>
                  </div>
                  <div className='col-sm-9'>
                    <p className='p-0 fw-bold text-dark'>20</p>
                    <p className='p-0'>chuyên Khoa</p>
                  </div>
                </div>
                <div className='col-3 d-flex '>
                  <div className='col-3 '>
                    <img src={CK2} className=' w-100 p-2 img-fluid'/>
                  </div>
                  <div className='col-9'>
                    <p className='p-0 fw-bold text-dark'>16</p>
                    <p className='p-0'>Phòng dịch vụ chất lượng cao</p>
                  </div>
                </div>
                <div className='col-3 d-flex '>
                  <div className='col-3 '>
                    <img src={CK3} className=' w-100 p-2 img-fluid'/>
                  </div>
                  <div className='col-9'>
                    <p className='p-0 fw-bold text-dark'>~300</p>
                    <p className='p-0'>Giường bệnh</p>
                  </div>
                </div>
                <div className='col-3 d-flex '>
                  <div className='col-3 '>
                    <img src={CK4} className=' w-100 p-2 img-fluid'/>
                  </div>
                  <div className='col-9'>
                    <p className='p-0 fw-bold text-dark'>12</p> 
                    <p className='p-0'>Phòng chức năng</p>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='col-12 home-item'>
              <div className='text-center'>
                <Chuyenkhoa/>
              </div>
              
            </div>
           


        </div>
        <div className='col-12 bg-white d-flex why'>
          <div className='col-5  '>
            <img src={why} />
          </div>
          <div className='col-7 pe-5'>
            <h2 className='text-center'>Tại sao chọn chúng tôi ?</h2>
            <div className='col-12 d-flex why-item'>
              <div className='col-1 why-item-left'>01</div>
              <div className='col-11 why-item-right '><span>Một trong những bệnh viện đa khoa chất lượng hàng đầu của thành phố Cần Thơ, liên tục nằm trong Top 5 các bệnh viện có chất lượng cao nhất theo đánh giá của Bộ Y tế.</span></div>
            </div>
            <div className='col-12 d-flex why-item'>
              <div className='col-1 why-item-left'>02</div>
              <div className='col-11 why-item-right'><span>Tiên phong cập nhật trang thiết bị hiện đại, ứng dụng kỹ thuật cao trong chăm sóc sức khỏe và điều trị bệnh.</span></div>
            </div>
            <div className='col-12 d-flex why-item'>
              <div className='col-1 why-item-left'>03</div>
              <div className='col-11 why-item-right'><span>Đội ngũ Y, Bác sĩ kinh nghiệm và được đào tạo chuyên sâu.</span></div>
            </div>
            <div className='col-12 d-flex why-item'>
              <div className='col-1 why-item-left'>04</div>
              <div className='col-11 why-item-right'><span>Áp dụng Bảo hiểm y tế và liên kết với nhiều bảo hiểm tư nhân.</span></div>
            </div>
          </div>
        </div>

        <div className='container home-item'>
          <div className='text-center'><h2>Dịch vụ</h2></div>
          <div className='col-12 d-flex'>
            <div className='col-4 service '>
              <div className='service-item'>
                <div className='d-flex justify-content-center py-4'><img src={S1} className='service-item-img'/></div>
                <div className='text-center py-3 fw-bold'><h5>Khám chữa bệnh đa khoa chuyên</h5></div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Bệnh viện đa khoa chất lượng hàng đầu, đáp ứng mọi nhu cầu về chẩn đoán và điều trị của người dân.</div>
                </div>
                <div className='col-12 d-flex py-3'>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Với đầy đủ các chuyên khoa và chuyên khoa sâu, ứng dụng, cập nhật trang thiết bị hiện đại và các phương pháp điều trị kỹ thuật cao nhằm chẩn đoán xác định bệnh và xây dựng phác đồ điều trị mang lại hiệu quả tốt nhất cho người bệnh.</div>
                </div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Các khoa mũi nhọn như: tim mạch, chấn thương chỉnh hình, nội ngoại thần kinh - đột quỵ, nội tiết, tiêu hóa, cấp cứu, sản, nhi … Đến nay, bệnh viện đa khoa Cần Thơ đã điều trị thành công nhiều bệnh phức tạp, có mức độ nguy hiểm cao, mà trước đó bệnh nhân chỉ có thể điều trị tại các bệnh viện lớn và ở nước ngoài. </div>
                </div>
              </div>
            </div>
            <div className='col-4 service '>
              <div className='service-item'>
                <div className='d-flex justify-content-center py-4'><img src={S2} className='service-item-img'/></div>
                <div className='text-center py-3 fw-bold'><h5>Cấp cứu 24/7 - trạm cấp cứu vệ tinh 115</h5></div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Là thành viên thứ 27 của trạm cấp cứu vệ tinh 121 tại Cần Thơ. Dịch vụ cấp cứu ngoại viện túc trực 24/7, với hệ thống xe và trang bị đầy đủ, luôn sẵn sàng phục vụ.</div>
                </div>
                <div className='col-12 d-flex py-3'>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm, khám và tư vấn tận tình. Bác sĩ, kỹ thuật viên, điều dưỡng, lái xe đã được huấn luyện và thực tập kỹ lưỡng về chuyên môn, quy trình sơ cứu, phương pháp vận chuyển,... nhằm đảm bảo an toàn cao nhất cho người bệnh trên đường nhập viện.</div>
                </div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Chúng tôi cũng có các dịch vụ cơ bản khác như: đưa đón người bệnh trong phạm vi nội – ngoại thành và các tỉnh lân cận cũng được cung cấp cho người bệnh có nhu cầu. </div>
                </div>
              </div>
            </div>
            <div className='col-4 service '>
              <div className='service-item'>
                <div className='d-flex justify-content-center py-4'><img src={S3} className='service-item-img'/></div>
                <div className='text-center py-3 fw-bold'><h5>Khám Sức Khỏe Tổng Quát cho cá nhân và doanh nghiệp</h5></div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Khám nội viện: các gói khám được thiết kế linh hoạt theo thời gian, ngân sách, đa dạng đáp ứng nhu cầu khám bệnh của doanh nghiệp với quy trình khép kín, các dịch vụ sử dụng tại một điểm.</div>
                </div>
                <div className='col-12 d-flex py-3'>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Khám ngoại viện: thực hiện các hoạt động khám bệnh tại doanh nghiệp nhằm tiết kiệm thời gian di chuyển cho cán bộ nhân viên công ty.</div>
                </div>
                <div className='col-12 d-flex '>
                  <div className='col-1'><i className="fa-solid fa-check"></i></div>
                  <div className='col-11'>Khám sức khỏe tổng quát dành cho cá nhân: đa dạng gói khám, thiết kế phù hợp từng độ tuổi, nhóm bệnh: khám sản - phụ khoa, đột quỵ,… giúp khách hàng dễ dàng lựa chọn. </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 '>
            <div className='text-center'>
              <Bacsi/>
            </div>
        </div>

        <div className=' location'>
          <div className='container'>
          <div className='pb-3'>
            <h2>Vị trí địa lý</h2>
          </div>
          <div style={{width: "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3928.8293559042345!2d105.78331039494012!3d10.030936496674602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1693978073655!5m2!1svi!2s"></iframe></div>
          </div>
        </div>

       
        <Facebook/>


      </div>

    </>
 
  )
}

export default home