import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams  } from "react-router-dom";
import { GlobalState } from '../../../GlobalState';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
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
  const initalState = {
    HoTen:'',
    NgaySinh:'',
    GioiTinh:'',
    DiaChi:'',
    SĐT:'',
    Email:'',
    NgayKham:'',
    GioKham:'',
    MoTa:'',
    BacSi:'',
    ChuyenKhoa:'',
    TrangThai:''
  
  }

function BacsiItem() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [bacsis, setBacsis] = state.bacsiAPI.bacsi
    const [bacsi, setBacsi] = useState('')
    const [scrollableModal, setScrollableModal] = useState(false);
    const [LichHen, setLichHen] = useState(initalState)
    const [HinhAnhBS, setHinhAnhBS] = useState(false)
    
  
    const handleChangeInput = e => {
      const {name,value} = e.target
      setLichHen({...LichHen, [name]:value})
    } 
  
    const handleSubmit = async e => {
      e.preventDefault();
      try{
        await axios.post('/api/lichhen',{...LichHen, ChuyenKhoa:bacsi.ChuyenKhoa, BacSi:bacsi.TenBS, TrangThai:"Chưa xác nhận"})
        alert('Đặt lịch hẹn thành công')
        window.location.reload()
        // alert(response.data.msg)
      }catch(error){
        alert(error.response.data.msg)
      }
    }
    // console.log(bacsi.HinhAnhBS.url)

    
    useEffect(() => {
    
            bacsis.forEach(bacsi => {
                if( param.id === bacsi._id) {
                  setBacsi(bacsi)
                  setHinhAnhBS(bacsi.HinhAnhBS.url)
                }
            })
        
    }, [])
    return (
        <div className='container'>
            <div className='col-12 '>
                <div className='my-5 d-flex'>
                    <div className='col-4'>
                        <div>
                            <img src={HinhAnhBS} className='w-100'/>
                        </div>
                    </div>
                    <div className='col-8 my-5 bacsi_item'>
                       <h3> Bác sĩ {bacsi.TenBS}</h3>
                       <div><h4>{bacsi.ChucVu}</h4></div>
                       <div><p> {bacsi.GioiThieuBS}</p></div>
                       <div><h6>Kinh nghiệm:</h6> {bacsi.KinhNghiem}</div>


                       <div className=' my-4 '>
                        <div className=''>
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
                        </div>
                        
                    </div>


                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BacsiItem