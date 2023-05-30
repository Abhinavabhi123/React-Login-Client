import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props, "props");
  return (
    <div className="banner-card">
      <img
        src={props.data.url}
        className="banner-inner-card"
        alt=""
        srcset=""
      />
      <h3>{props.data.Name}</h3>
    </div>
  );
}

export default Card;
