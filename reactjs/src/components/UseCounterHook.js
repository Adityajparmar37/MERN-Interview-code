import React from "react";
import useCounter from "./useCounter";
export default function UseCounterHook() {
  const { count, increment, decrement } =
    useCounter();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </>
  );
}
