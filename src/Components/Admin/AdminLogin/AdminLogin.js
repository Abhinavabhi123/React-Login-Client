import React,{useState} from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router";
import axios  from 'axios'
import { adminApi } from "../../../Store/Api";
import {useDispatch} from "react-redux"
import { AdminAction } from "../../../Store/AdminAuth";

function AdminLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const [errMessage,setErrMessage]=useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    if(email === ''){
        setErrMessage("Entered Email is Empty")
    }else{
        if(password === ''){
            setErrorMessage("Password Field is Empty")
        }else{
            axios.post(`${adminApi}login`,{email,password},{withCredentials:true}).then((response)=>{
                const result = response.data.adminSignup
                console.log(result);
                if(result.Status){
                    dispatch(AdminAction.AddAdmin({token:result.token}))
                    navigate("/admin")
                }else{
                    setErrMessage(result.message)
                }
            })
        }
    }
  };
  return (
    <div className="wrapper">
      <div className="container mt-4">
        <form action="" className="form-signin" onSubmit={submitHandler}>
          <h2 className="form-heading text-center">Admin Login Form</h2>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autoFocus=""
            value={email}
            onChange={(e)=>{setEmail(e.target.value) 
            setErrMessage('')}}
          />

          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            autoFocus=""
            value={password}
            onChange={(e)=>{setPassword(e.target.value)
            setErrorMessage('')}}
          />
          <button type="submit" className="btn btn-lg btn-dark btn-block">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
