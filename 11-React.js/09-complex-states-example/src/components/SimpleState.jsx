import React, { useState } from "react";

function SimpleState() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Name, setName] = useState("");

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    setName(FirstName + " " + LastName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <p>Simple State Example</p>
      <h1>Hello {Name} !</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChangeFirstName}
          value={FirstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChangeLastName}
          value={LastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SimpleState;
