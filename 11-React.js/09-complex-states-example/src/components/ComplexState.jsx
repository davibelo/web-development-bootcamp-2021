import React, { useState } from "react";

function ComplexState() {
  const [FullName, setFullName] = useState({ FirstName: "", LastName: "" });

  function handleChange(event) {
    // destructuring the value passed by input
    // and the name of the input from the event object
    const { value, name: inputName } = event.target;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          FirstName: value,
          LastName: prevValue.LastName,
        };
      } else if (inputName === "lName") {
        return {
          FirstName: prevValue.FirstName,
          LastName: value,
        };
      }
    });
  }  

  return (
    <div className="container">
      <h1>
        Hello {FullName.FirstName} {FullName.LastName}!
      </h1>
      <form >
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          // value={FirstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          // value={LastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexState;
