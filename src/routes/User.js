import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from '../pages/User/Home'
import Login from '../pages/User/Login'
import Register from '../pages/User/Register'

function User() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default User
