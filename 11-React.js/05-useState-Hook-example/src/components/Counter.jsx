import React, { useState } from "react";

function Counter() {
  // useState consists of an array, with a state value and
  // a function that updates the state value
  // calling useState(x), defines x as the initial state value
  // destructuring useState in a array of count and setCount
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="counterButton" onClick={Increase}>
        +
      </button>
      <button className="counterButton" onClick={Decrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
