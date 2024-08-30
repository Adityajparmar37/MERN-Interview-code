import React, { useReducer } from "react";

const InitialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(
    reducer,
    InitialValue
  );

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch("increment")}>
        +
      </button>
      <button
        onClick={() => dispatch("decrement")}>
        -
      </button>
    </>
  );
}
