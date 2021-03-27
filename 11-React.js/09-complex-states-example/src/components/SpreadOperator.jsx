import React, { useState } from "react";

function ComplexStatePractice() {
  const [contact, setContact] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });

  const [contactFields, setContactFields] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContactFields((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    setContact({
      FirstName: contactFields.FirstName,
      LastName: contactFields.LastName,
      email: contactFields.email,
    });
    setContactFields({
      FirstName: "",
      LastName: "",
      email: "",
    });
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <input
          name="FirstName"
          placeholder="First Name"
          value={contactFields.FirstName}
          onChange={handleChange}
        />
        <input
          name="LastName"
          placeholder="Last Name"
          value={contactFields.LastName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contactFields.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplexStatePractice;
