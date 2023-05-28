import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import axios from 'axios'
import {adminApi }from "../../../Store/Api"

function AdminHome() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleteUser, setDeleteUser] = useState(0);
  
  
  useEffect(()=>{
    axios.get(`${adminApi}getUserDetails`,{withCredentials:true}).then((response)=>{
        setUserData(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })

},[deleteUser===1])
  
  const handleChange = (event) => {
    setSearch(event.target.value)
    setDeleteUser(0)
    if(search.length>0){
        let updateUser = userData.filter((item)=>item.firstName.toLowerCase().indexOf(search.toLowerCase())!==-1)
        setUserData(updateUser)
    }else{
        setUserData(userData)
        setDeleteUser(1)
    }
  };

  const editUser = (UserId,firstName,lastName,userEmail) => {
    navigate('/admin/editUser',{state:{_id:UserId,firstName:firstName,lastName:lastName,email:userEmail}})
  };

  const DeleteUser = (id) => {
    console.log("im here")
    axios.get(`${adminApi}deleteUser/${id}`,{withCredentials:true}).then((response)=>{
        setUserData(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
    setDeleteUser(1)
  };
  console.log(userData)

  return (
    <div className="table">
      <div className="search2">
        <input
          className="mt-5"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={search}
        />
      </div>

      <Table className="mt-3 "  bordered >
        <thead style={{ color: "white" }}>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody className="values " style={{ color: "white" }}>
          {userData.map((obj, index) => {
            return (
              <tr>
                <td style={{color:"white"}}>{index + 1}</td>
                <td>{obj.firstName} {obj.lastName}</td>
                <td>{obj.email}</td>
                <td>
                  <Button
                    onClick={() => editUser(obj._id, obj.firstName,obj.lastName, obj.email)}
                    variant="primary"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => DeleteUser(obj._id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminHome;
