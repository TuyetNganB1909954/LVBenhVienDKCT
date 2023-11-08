import React, { useContext, useState } from 'react'
import axios from 'axios'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
// import Popup from 'reactjs-popup';
import logo from '../asset/logo1.png'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sos from "../asset/24-hours-calls-svgrepo-com (1).svg"
import { GlobalState } from '../../GlobalState';

const initalState = {
  HoTen:'',
  NgaySinh:'',
  GioiTinh:'',
  DiaChi:'',
  SĐT:'',
  Email:'',
  NgayKham:'',
  GioKham:'',
  MoTa:''

}


function Header() {

  const [scrollableModal, setScrollableModal] = useState(false);
  const state = useContext(GlobalState)
  const [LichHen, setLichHen] = useState(initalState)
  console.log(LichHen)

  const handleChangeInput = e => {
    const {name,value} = e.target
    setLichHen({...LichHen, [name]:value})
  } 

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await axios.post('/api/lichhen',{...LichHen})
      alert('Đặt lịch hẹn thành công')
      // alert(response.data.msg)
    }catch(error){
      alert(error.response.data.msg)
    }
  }
  

  return (
    <div className='bg-light'>
        <div className=' container px-4'>
            <div className='row  '>
              <div className='col-md-12 text-center'>
                <div className=' header-top'>
                  <div className='col-md-10 d-flex header-top-item header-top-item-left '><img src={sos}/> <p className='m-0'>Dịch vụ cấp cứu & xe cứu thương 24 giờ: +321 789 01 2345</p></div>
                  <div className='col-md-2 header-top-item  header-top-item-right'>
                    <div><i className="fa-brands fa-facebook"></i></div>
                    <div><i className="fa-brands fa-twitter"></i></div>
                    <div><i className="fa-brands fa-youtube"></i></div>
                    <div><i className="fa-brands fa-linkedin"></i></div>
                    <div><i className="fa-brands fa-google"></i></div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <div className=' hearder-middle'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 d-flex hearder-middle-item'>
                <div className='col-4 header-logo  '>
                  <img src={logo}/>
                </div>
                <div className='col-8 d-flex header-left '>
                  <div className='col-4 header-left-item'>
                    <div className='d-flex '>
                      <div className='col-2 text-center'><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                      <div className='col-10 '>
                        <h5 className='text-capitalize p-0'>Số 04 Châu Văn Liêm </h5>
                        <p className='m-0'>P.Tân An, Q.Ninh Kiều, TP.Cần Thơ</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-4 header-left-item '>
                    <div className='d-flex '>
                      <div className='col-2 text-center'><i className="fa-solid fa-calendar-days"></i></div>
                      <div className='col-10 '>
                        <h5 className='text-capitalize p-0'>thời gian làm việc</h5>
                        <p className='m-0'>7h00 - 16h30 | Thứ 2 - Thứ 6</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-4 header-left-item '>
                    <div className='d-flex '>
                      <div className='col-2 text-center'> <i className="fa-solid fa-mobile-screen-button"></i></div>
                      <div className='col-10 '>
                        <h5 className='text-capitalize'>liên hệ</h5>
                        <p className='m-0'>+1-888-987-6543</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
             
            </div>
          </div>
        </div>
        <div className=' nav-middle '>
          <div className='container'>
          {['md'].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0 ">
              <Container fluid>
                <Navbar.Brand href="#" className='nav-logo w-75'> <img src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      {/* Offcanvas */}
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='align-items-center'>
                    <Nav className="justify-content-start flex-grow-1 pe-3 ">
                      
                    {/* <Nav.Link href="#action1">Trang chủ</Nav.Link> */}
                    <Nav.Link href="#action2">Giới thiệu</Nav.Link>
                    <Nav.Link href="#action1">Các khoa chuyên môn</Nav.Link>
                    <Nav.Link href="#action2">Dịch vụ</Nav.Link>
                    <Nav.Link href="#action2">Đội ngũ y bác sĩ </Nav.Link>
                    {/* <Nav.Link href="#action2">Hướng dẫn khách hàng</Nav.Link> */}
                    <Nav.Link href="#action2">Liên hệ</Nav.Link>

                      {/* <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown> */}
                    </Nav>
                    <>
                <Button onClick={() => setScrollableModal(!scrollableModal)}  className="navbar-order" >đặt lịch hẹn</Button>

                <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                  <MDBModalDialog scrollable>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle> <h3 className='text-blue'>Đặt lịch hẹn</h3></MDBModalTitle>
                        <MDBBtn
                          className='btn-close'
                          color='none'
                          onClick={() => setScrollableModal(!scrollableModal)}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody className='form-order'>
                        <div>
                          <h6 className='text-blue'>Thông tin bệnh nhân</h6>
                          <Form  onSubmit={handleSubmit} >
                            <Form.Group className="mb-2" controlId="formGroupHoTen">
                              <Form.Control type="text" placeholder="&#xf007; Họ và tên" className='bg-light rounded-0 mainLoginInput'  name='HoTen' required value={LichHen.HoTen} onChange={handleChangeInput}  />
                            </Form.Group>
                            <div className='col-12 d-flex'>
                              <div className='col-6'>
                              <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="&#xf0e0; Email" className='bg-light rounded-0 mainLoginInput' name='Email' required value={LichHen.Email} onChange={handleChangeInput}/>
                              </Form.Group>
                              </div>
                              <div className='col-6'>
                                <Form.Group className="mb-2 ps-2" controlId="formGroupPhone">
                                <Form.Control type="text" placeholder="&#xf095; Số điện thoại" className='bg-light rounded-0 mainLoginInput' name='SĐT' value={LichHen.SĐT} onChange={handleChangeInput}/>
                                </Form.Group>
                              </div>
                            </div>
                            <Form.Group className="mb-2" controlId="formGroupPhone">
                                <Form.Control type="text" placeholder="&#xf3c5; Địa chỉ" className='bg-light rounded-0 mainLoginInput' name='DiaChi' required value={LichHen.DiaChi} onChange={handleChangeInput}/>
                            </Form.Group>
                            <div className='col-12 d-flex'>
                              <div className='col-7'>
                                <Form.Group className="mb-2" controlId="formGroupEmail">
                                  <Form.Control type="date"  className='bg-light rounded-0 mainLoginInput' name='NgaySinh' required value={LichHen.NgaySinh} onChange={handleChangeInput}/>
                                </Form.Group>
                              </div>
                              <div className='col-5'>
                              <Form.Group  className="ps-2" controlId="formGroupEmail">
                                <Form.Select aria-label="Default select example"size="md" name='GioiTinh' value={LichHen.GioiTinh} onChange={handleChangeInput} className='bg-light rounded-0 form-gioitinh'>
                                  <option >Giới tính</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                                </Form.Select>
                              </Form.Group>
                              </div>
                            </div>

                            

                            <div>
                              <h6 className='text-blue'>Ngày khám</h6>
                                <Form.Group className="mb-2" controlId="formGroupHoTen">
                                  <Form.Control type="date"  name='NgayKham' required value={LichHen.NgayKham} onChange={handleChangeInput} className='bg-light rounded-0' />
                                </Form.Group>
                            </div>
                            <div>
                              <h6 className='text-blue'>Giờ khám</h6>
                                {/* <Form.Group className="mb-2" controlId="formGroupHoTen">
                                  <Form.Control type="time"  name='GioKham' required value={LichHen.NgayGio} onChange={handleChangeInput} className='bg-light rounded-0' />
                                </Form.Group> */}

                                <Form.Group  className="" controlId="formGroupEmail">
                                <Form.Select aria-label="Default select example"size="md"  name='GioKham' required value={LichHen.NgayGio} onChange={handleChangeInput} className='bg-light rounded-0 form-gioitinh'>
                                  <option >Chọn giờ khám</option>
                                  <option value="07:00-08:00">07:00-08:00</option>
                                  <option value="08:00-09:00">08:00-09:00</option>
                                  <option value="09:00-10:00">10:00-11:00</option>
                                  {/* <option value="11:00-12:00">11:00-12:00</option> */}
                                  {/* <option value="12:00-13:00">12:00-13:00</option> */}
                                  <option value="13:00-14:00">13:00-14:00</option>
                                  <option value="14:00-15:00">14:00-15:00</option>
                                  <option value="15:00-16:00">15:00-16:00</option>
                                  <option value="16:00-17:00">16:00-17:00</option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                            <div>
                              <h6 className='text-blue'>Mô tả bệnh</h6>
                                <Form.Group className="mb-2" controlId="formGroupHoTen">
                                  <Form.Control as="textarea" aria-label="With textarea" className='bg-light rounded-0' name='MoTa' required value={LichHen.MoTa} onChange={handleChangeInput}/>
                                </Form.Group>
                            </div>
                            <div className='text-end'>
                              <Button className='btn-order rounded-1 mt-2' type="submit">
                                Đặt hẹn
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </MDBModalBody>
                      <MDBModalFooter>
                    
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
          </div>
          
        </div>
        
     


     
    </div>
  )
}

export default Header