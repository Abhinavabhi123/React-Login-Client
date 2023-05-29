import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { userApi } from "../../../Store/Api";

function Profile() {

  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState(null);
  const [edited,setEdited]=useState(0)
  const [preview, setPreview] = useState("https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?pid=ImgDet&rs=1");
  useEffect(() => {
    axios
      .get(`${userApi}profile`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data.user[0]);
        setOpen(response.data.user[0].image)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [edited===1]);
  console.log(userData.firstName, "user heRE");
  const handleImage = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setImage(file);
  };
  const submitUpdates = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    axios.post(`${userApi}editProfile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then((response)=>{
      
    
      setPreview(response.data.url);
      setEdited(1)
    }).catch((error)=>{
      console.log(error);
    })
  };
  console.log(preview,"ooo")

  return (
    <div className="profile-wrapper ">
      <div className="card">
        <div className="card-info">
          {open ? (
            <div
              className="card-avatar"
              
            >
              <img style={{width:"10rem"}} src={`${userApi}profileImages/${userData.image}`} alt="profile Image" />
            </div>
          ) : (
            <img style={{width:"10rem",paddingBottom:"1rem"}} src={preview} alt="profile Image" />
            // <div>hello</div>
          )}
          <input
            type="file"
            onChange={handleImage}
            id="myFile"
            className="file-input"
          />
          <label htmlFor="myFile" className="mb-2">
            Upload Image
          </label>
          <div className="card-title">
            {userData ? `${userData.firstName} ${userData.lastName}` : ""}
          </div>
          <div className="card-subtitle">{userData ? userData.email : ""}</div>
        </div>
        <button className="btn btn-primary mt-3" onClick={submitUpdates}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Profile;
