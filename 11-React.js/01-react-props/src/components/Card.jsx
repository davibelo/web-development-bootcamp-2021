//jshint esversion:6
import React from "react";

// React Component
// Example of props using
// Inside component, you can assign classes
// or access other HTML elements attributes
function Card(props) {
  return (
    <div className="contacts-card">
      <h2 className="contacts-name">{props.name}</h2>
      <img className="contacts-circle-img" src={props.img} alt="avatar_img" />
      <p className="contacts-info">{props.phoneNumber}</p>
      <p className="contacts-info">{props.email}</p>
    </div>
  );
}
export default Card;