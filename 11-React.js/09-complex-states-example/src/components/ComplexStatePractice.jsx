//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

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
      <p>ComplexState Practice</p>
      <h1>
        Hello {contact.FirstName} {contact.LastName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={HandleChange} />
        <input name="lName" placeholder="Last Name" onChange={HandleChange} />
        <input name="email" placeholder="Email" onChange={HandleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexStatePractice;
