import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const incrementCount = () => {
    setNum(num + 1);
  };

  const decrementCount = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div>
        <p>Display num:{num} </p>
      </div>
      <button className="increment" onClick={incrementCount}>
        +
      </button>

      <button className="decrement" onClick={decrementCount}>
        -
      </button>
    </div>
  );
};

export default App;
