//jshint esversion:6
import React from "react";

import Avatar from "./Avatar";
import Detail from "./Detail";

// Example of using of props
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail info={props.tel} />
          <Detail info={props.email} />
        </div>
      </div>
    </div>
  );
}
export default Card;
// see props.img being passed to Avatar Component
// see props.tel and props.email being passed to Detail Component
// but in Detail component the prop is "info"!

