import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AdminLogin from "../pages/Admin/AdminLogin"
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { AdminAction } from '../Store/AdminAuth'
import AdminHome from '../Components/Admin/AdminHome/AdminHome'

function Admin() {
    const [cookies,setcookies]=useCookies(['jwt'])
    const dispatch =useDispatch()
    useEffect(()=>{
        if(Object.keys(cookies).length>0){
            dispatch(AdminAction.AddAdmin({token:cookies?.jwt?.Admintoken}))
        }
    },[])
    let Admin = useSelector(state=>{return state.Admin.Admintoken})
  return (
    <div>
        <Routes>
                <Route path='/' element={Admin ?<AdminHome/> :<AdminLogin/>}/>
        </Routes>
      
    </div>
  )
}

export default Admin
