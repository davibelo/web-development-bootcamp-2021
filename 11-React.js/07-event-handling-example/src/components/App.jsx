import React, { useState } from "react";

function App() {
  let [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("button clicked");
  }

  // commented bellow is other option of implementation

  let [isMouseOver, setMouseOver] = useState(false);
  // let [buttonColor, setButtonColor] = useState("white");

  function handleMouseOver() {
    setMouseOver(true);
    // setButtonColor("black");
  }

  function handleMouseOut() {
    setMouseOver(false);
    // setButtonColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        // style={{ backgroundColor: buttonColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
