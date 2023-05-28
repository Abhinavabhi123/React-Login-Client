import React,{useState,useRef} from "react";
import "./AdminEditUser.css";
import axios from "axios"
import { adminApi } from "../../../Store/Api";
import { useLocation, useNavigate } from "react-router";

function AdminEditUser() {
  const location = useLocation();
  const [error,setError]=useState('')
  const editFname=useRef()
  const editLname = useRef()
  const editEmail = useRef()
  const userId = location.state._id;
  const firstName = location.state.firstName;
  console.log(firstName)
  const lastName = location.state.lastName;
  const email = location.state.email
  const SubmitEdit=()=>{
    const editedUserFname = editFname.current.value;
    const editedUserLname = editLname.current.value;
    const editedUserEmail = editEmail.current.value;
    if(editedUserFname!==""&&editedUserLname!==""&&editedUserEmail!==""){
        axios.post(`${adminApi}editUser`,{
            userId,
            editedUserFname,
            editedUserLname,
            editedUserEmail
        },{withCredentials:true}).then((response)=>{
            
        })
    }else{
        setError("Some Field are Empty")
    }
  }

  return (
    <div className="edit-wrapper">
      <div className="container1 ">
        <h1 className="heading fw-bold mb-5  text-center">Edit Details</h1>

        <div className="form-outline mb-2 mt-3">
          <label className="form-label" for="form2Example1">
            First Name
          </label>
          <input
            type="text"
            id="userEmail"
            className="form-control"
            name="fname"
            autoComplete="off"
            ref={editFname}
            defaultValue={firstName}
          />
        </div>
        <div className="form-outline mb-2 mt-3">
          <label className="form-label" for="form2Example1">
            {" "}
            Last Name
          </label>
          <input
            type="text"
            id="userEmail"
            className="form-control"
            name="lname"
            autoComplete="off"
            ref={editLname}
            defaultValue={lastName}
          />
        </div>
        <div className="form-outline mb-4 mt-3">
          <label className="form-label" for="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="userEmail"
            className="form-control"
            name="Email"
            ref={editEmail}
            defaultValue={email}
          />
        </div>

        <div className="text-center">
          <small className="text-danger"></small>
        </div>
        {error.length > 0 && <a style={{ color: 'red' }}  >{error}</a>}
        <div className="text-center">
          <button
            id="btn-submit"
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={SubmitEdit}
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminEditUser;
