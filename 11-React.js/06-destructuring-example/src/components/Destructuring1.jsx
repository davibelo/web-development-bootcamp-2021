import React from "react";
import cars from "../cars.js";

// exploring cars structure before destructuring
// console.log(cars);

// 1st destructuring
// destructuring cars (cars is a array)
const [honda, tesla] = cars;
// console.log(honda);
// console.log(tesla);

// 2nd destructuring
// destructuring honda (honda is a object)
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour, honda2ndColour],
} = honda;
// console.log(hondaTopSpeed, hondaTopColour, honda2ndColour);

// destructuring tesla in 2 steps
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

function Destructuring1() {
  return (
    <div>
      <p>Destructuring Practice:</p>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}
export default Destructuring1;
