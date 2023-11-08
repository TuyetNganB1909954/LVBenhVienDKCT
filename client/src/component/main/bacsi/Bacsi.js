import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function Bacsi() {
  const state = useContext(GlobalState)
  const [bacsis, setbacsi] = state.bacsiAPI.bacsi
  console.log(bacsis)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll:3
  };
  return (
    <div className='bg-white py-5'>
       <div className='container '>
        <div className='row'>
            <div className='bacsi-header py-3'><h2>Đội ngũ y bác sĩ</h2></div>
            <div>
              <Slider {...settings}>
               {
                bacsis.map( bacsi => (
                  <div className=' ' key={bacsi.MaBS} >
                    <Link  to={`/bacsi/${bacsi._id}`}>
                      <div className='doctor'>
                        <div className=''>
                          <img className='img-fluid' src={bacsi.HinhAnhBS.url}/>
                        </div>
                        <div className='py-4'>
                          <p className='p-0 fw-bold'>{bacsi.TenBS}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
               }
              </Slider>
            </div>
        </div>
      </div>
    </div>
   
  )
}

export default Bacsi