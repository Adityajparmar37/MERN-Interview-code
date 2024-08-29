import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({
  count,
  incrementCount,
}) => {
  return (
    <>
      <h1>Count is: {count}</h1>
      <button onMouseOver={incrementCount}>
        Hover Me
      </button>
    </>
  );
};

export default withCounter(HoverCounter, 5);
