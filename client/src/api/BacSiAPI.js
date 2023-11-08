import React, { useEffect, useState } from 'react'
import axios from 'axios'


function BacSiAPI() {
    const [bacsi, setbacsi] = useState([])
    const getbacsi = async() => {
        const res = await axios.get('/api/bacsi')
        // console.log(res.data.bacsi)
        setbacsi(res.data.bacsi)
        
    }
    useEffect(()=>{
        getbacsi()
    },[])

  return {
    bacsi: [bacsi, setbacsi]
  }
}

export default BacSiAPI