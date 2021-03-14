//jshint esversion:6
import React from "react";

// importing components
import Expressions from "./components/Expressions";
import Importing from "./components/Importing";
import Styling from "./components/Styling";
import Card from "./components/Card";

// making React/JSX App
// it calls other React Components
// On Card Component, you can view props using example
function App() {
  return (
    <div>
      <Expressions />
      <Styling />
      <Importing />
      <br></br>
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phoneNumber="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phoneNumber="+987 654 321<"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phoneNumber="+918 372 574"
        email="gmail@chucknorris.com<"
      />
    </div>
  );
}
export default App;