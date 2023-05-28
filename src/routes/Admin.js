import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AdminLogin from "../pages/Admin/AdminLogin"
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { AdminAction } from '../Store/AdminAuth'
import AdminHome from '../pages/Admin/AdminHome'

function Admin() {
    const [cookies,setcookies]=useCookies(['jwt'])
    const dispatch =useDispatch()
    console.log(AdminAction.AddAdmin({token:cookies?.jwt?.AdminToken}),"oooyaa");
    useEffect(()=>{
        if(Object.keys(cookies).length>0){
            dispatch(AdminAction.AddAdmin({token:cookies?.jwt?.AdminToken}))
        }
    },[])
    let Admin = useSelector(state=>{return state.Admin.AdminToken})
  return (
    <div>
        <Routes>
                <Route path='/' element={Admin ?<AdminHome/> :<AdminLogin/>}/>
                <Route path='/AdminLogin'  element={Admin ? <AdminHome/> : <AdminLogin/>} />
        </Routes>
      
    </div>
  )
}

export default Admin
