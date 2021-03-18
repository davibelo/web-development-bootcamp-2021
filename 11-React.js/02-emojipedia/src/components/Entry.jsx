//jshint esversion:6
import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.title}>
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}
export default Entry;
