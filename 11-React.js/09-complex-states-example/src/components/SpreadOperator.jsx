import React, { useState } from "react";

function ComplexStatePractice() {
  const [contact, setContact] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });

  function HandleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // why "name" above is inside square brackets?
  // ES6 permits this syntax to consider the name as a key property of the object
  // otherwise javascript will consider it as a string and the code will not work
  // https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1

  return (
    <div className="container">
      <p>ComplexState using Spread Operator</p>
      <h1>
        Hello {contact.FirstName} {contact.LastName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="FirstName"
          placeholder="First Name"
          value={contact.FirstName}
          onChange={HandleChange}
        />
        <input
          name="LastName"
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
