import React from "react";

// the name of pi const doesn't have to match 
// the name inside math module
// it happens because use of the export default
// for the others items, its matter!
import PI, {doublePi, triplePi} from "../math.js";

function Importing() {
  return (
    <ul>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}
export default Importing;
