//jshint esversion:6
import React from "react";

// importing components
import Card from "./Card";
import Avatar from "./Avatar";

// importing contacts
import contacts from "../contacts";

// making a Card constructor
function createCard(contact) {
  return (
    <Card
      // necessary to use a key!
      // it have to be unique
      // it unaccessible as a normal prop
      key={contact.id}
      // to access id, it is necessary
      // to assign it to a real prop
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

// using for loop to create Cards
// const Cards = [];
// for (let i=0; i<contacts.length;i++){
//   let Card = createCard(contacts[i])
//   Cards.push(Card);
// }
// using ForEach loop to create Cards
// const Cards = [];
// contacts.forEach(function(contact){
//   let Card = createCard(contact);
//   Cards.push(Card);
// });

console.log(contacts);

// making React/JSX App
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />

      {/* using constructor inside JSX */}
      {/* array.map method will call the given 
    function for each element of the array */}
      {contacts.map(createCard)}

      {/* inserting Cards created with for or ForEach loops */}
      {/* {Cards} */}

      {/* without constructor and array map method:*/}
      {/* <Card
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
      /> */}
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
