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
  console.log(FullName);
  return (
    <div className="container">
      <p>ComplexState Example</p>
      <h1>
        Hello {FullName.FirstName} {FullName.LastName}!
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={FullName.FirstName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={FullName.LastName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexState;
