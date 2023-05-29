import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { UserActions } from "../../../Store/userAuth";
import { Button } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);
  let user = useSelector((state) => state.user.useToken);
  let userName = useSelector((state) => state.user.firstName);
  console.log(userName,"name Here");
  const UserLogout = () => {
    removeCookie("jwt");
    dispatch(UserActions.userLogout());
    navigate("/login");
  };
  user = "Abhinav";
  userName = "Abhinav";
  return (
    <header className="nav_header">
      <div>
       
        <img
          className="logo"
          src="https://t4.ftcdn.net/jpg/04/72/34/21/360_F_472342109_w3xPTE23Vehlk6C3eQLas4cuyrzrVc01.jpg"
          alt="logo"
        />
      </div>
      <div>
        {user ? (
          <h1 style={{ color: "red" }}>Hi..{userName}</h1>
        ) : (
          <h1 style={{ color: "red" }}>Hi There!</h1>
        )}
        <ul className="nav">
          {user ? (
            <li onClick={UserLogout}>
              <Button style={{ backgroundColor: "red", border: "none" }}>
                Logout
              </Button>
            </li>
          ) : (
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              <Button style={{ backgroundColor: "green", border: "none" }}>
                Login
              </Button>
            </li>
          )}
          {user ? (
            <li
              onClick={() => {
                navigate("/profile");
              }}
            >
            
              <a> My Profile</a>
               
            </li>
          ) : (
            <li
              onClick={() => {
                navigate("/register");
              }}
            >
              <Button style={{ backgroundColor: "blue", border: "none" }}>
                Signup
              </Button>{" "}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
