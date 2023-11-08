import React, { useEffect, useState } from 'react'
import axios from 'axios'


function ChuyenKhoaAPI() {
    const [chuyenkhoa, setchuyenkhoa] = useState([])
    const getchuyenkhoa = async() => {
        const res = await axios.get('/api/chuyenkhoa')
        console.log(res.data.chuyenkhoa)
        setchuyenkhoa(res.data.chuyenkhoa)
        
    }
    useEffect(()=>{
        getchuyenkhoa()
    },[])

  return {
    chuyenkhoa: [chuyenkhoa, setchuyenkhoa]
  }
}

export default ChuyenKhoaAPI