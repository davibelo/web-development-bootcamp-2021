import React from "react";

function Button(props) {
  return (
    <div>
      <button type="submit">{props.text}</button>
    </div>
  );
}

export default Button;
