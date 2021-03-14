//jshint esversion:6
import React from "react";

// React Component
// Example of props using
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.phoneNumber}</p>
      <p>{props.email}</p>
    </div>
  );
}
export default Card;

