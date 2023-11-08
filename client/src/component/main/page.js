import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/home'
import BacsiItem from './bacsi/BacsiItem'
function page() {
  return (
    <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/bacsi/:id" element={<BacsiItem/>}/>
    </Routes>
  )
}

export default page