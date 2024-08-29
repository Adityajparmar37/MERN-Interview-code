import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({
  count,
  incrementCount,
}) => {
  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={incrementCount}>
        Click Me
      </button>
    </>
  );
};

export default withCounter(ClickCounter);
