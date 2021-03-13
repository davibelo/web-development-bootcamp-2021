//jshint esversion:6
import React from "react";

// importing components
import Expressions from "./components/Expressions";
import Importing from "./components/Importing";
import Styling from "./components/Styling";

// making React/JSX App
// it calls other React Components
function App() {
  return (
    <div>
      <Expressions/>
      <Styling/>      
      <Importing/>
    </div>
  );
}
export default App
