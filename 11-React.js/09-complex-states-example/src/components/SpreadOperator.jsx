import React, { useState } from "react";

function ComplexStatePractice() {
  const [contact, setContact] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });

  function HandleChange(event) {
    const { value, name: inputName } = event.target;

    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          FirstName: value,
          LastName: prevValue.LastName,
          email: prevValue.email,
        };
      } else if (inputName === "lName") {
        return {
          FirstName: prevValue.FirstName,
          LastName: value,
          email: prevValue.email,
        };
      } else if (inputName === "email") {
        return {
          FirstName: prevValue.FirstName,
          LastName: prevValue.LastName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <p>ComplexState using Spread Operator</p>
      <h1>
        Hello {contact.FirstName} {contact.LastName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.FirstName}
          onChange={HandleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.LastName}
          onChange={HandleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={HandleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexStatePractice;
