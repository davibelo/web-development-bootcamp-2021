//jshint esversion:6
import React from "react";

// importing components
import Card from "./Card";

import contacts from "../contacts";

// making React/JSX App
function App() {  
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}
export default App;

// On Card Component above:
// You can view props using example
// You can assign values to defined props
// BUT
// You can't common html attributes for Components
// For class assignments or other HTML attributes
// You have to work inside the component code
