import React from "react";

const CallBackButton = ({ increment }) => {
  console.log("CallBackButton comp render ...");
  return (
    <button onClick={increment}>Click Me</button>
  );
};

export default React.memo(CallBackButton);
