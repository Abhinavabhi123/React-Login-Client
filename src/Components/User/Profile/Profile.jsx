import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { userApi } from "../../../Store/Api";

function Profile() {
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [preview,setPreview]=useState("")
  useEffect(() => {
    axios
      .get(`${userApi}profile`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data.user[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userData.firstName, "user heRE");
  const handleImage=(event)=>{
    const file = event.target.file
    const url = URL.createObjectURL(file)
    setImage(file)
    setPreview(url)
  }
const submitUpdates=(e)=>{
  e.preventDefault()
  const formData = new FormData();
}

  return (
    <div className="profile-wrapper ">
      <div class="card">
        <div class="card-info">
          
          {open ? (
            <div class="card-avatar" style={{ backgroundColor: "red" }}></div>
          ) : (
            <div>hello</div>
          )}
          <input type="file" onChange={handleImage} id="myFile" class="file-input" />
          <label for="myFile" className="mb-2">
            Upload Image
          </label>
          <div class="card-title">
            {userData ? `${userData.firstName} ${userData.lastName}` : ""}
          </div>
          <div class="card-subtitle">{userData ? userData.email : ""}</div>
        </div>
        <button className="btn btn-primary mt-3" onClick={submitUpdates}>Save</button>
      </div>
    </div>
  );
}

export default Profile;
