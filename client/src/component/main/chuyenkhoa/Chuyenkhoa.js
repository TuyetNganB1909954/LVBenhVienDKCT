import React, { useContext, useState } from 'react'
import axios from 'axios'
import Header from '../../header/Header'
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

function Chuyenkhoa() {
    const state = useContext(GlobalState)
    const [chuyenkhoa, setchuyenkhoa] = state.chuyenkhoaAPI.chuyenkhoa
    console.log(chuyenkhoa)
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
  return (
    <div>
        <div className='main'>
        <div className='main-top'><h2>Các chuyên khoa</h2> </div>
            <div className='main-middle '>
                <div className='conntainer'>
                    <div className='row'>
                        <div className=''>
                            <Slider {...settings}>
                            { 
                                        chuyenkhoa.map( chuyenkhoa_item => (
                                            <div className='chuyenkhoa' key={chuyenkhoa_item}>
                                                <div className='chuyenkhoa_item'>
                                                    <div className='chuyenkhoa_item-img'>
                                                        <img src={chuyenkhoa_item.HinhAnhCK.url} className='img-fluid' />
                                                    </div>
                                                  
                                                </div>
                                                <div className='pb-3 fw-semibold'>{chuyenkhoa_item.TenCK}</div>
                                            </div>
                                        ))
                                    }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chuyenkhoa