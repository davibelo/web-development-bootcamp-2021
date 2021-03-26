import React, { useState } from "react";

function App() {
  // event handling example:
  // creating states variables
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  // creating function to handle the events
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeadingText(name);
    // prevents refreshing page on submitting
    event.preventDefault();
  }

  // only for "without form tag example"
  // function handleClick() {
  //   setHeadingText(name);
  // }

  // changing style dynamically example:
  // commented bellow is other option of implementation

  const [isMouseOver, setMouseOver] = useState(false);
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
      <h1>Hello {headingText}!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleChange}
        />
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          // style={{ backgroundColor: buttonColor }}
        >
          Submit
        </button>
      </form>

      {/* same behaviour, but without using html form tag*/}
      {/* <h1>Hello {headingText}!</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        // style={{ backgroundColor: buttonColor }}
      >
        Submit
      </button> */}
    </div>
  );
}

export default App;
