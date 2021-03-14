//jshint esversion:6
import React from "react";

// importing components
import Expressions from "./Expressions";
import Importing from "./Importing";
import Styling from "./Styling";

// making React/JSX App
// it calls other React Components
function App() {
  return (
    <div>
      <Expressions />
      <Styling />
      <Importing />
    </div>
  );
}
export default App;

