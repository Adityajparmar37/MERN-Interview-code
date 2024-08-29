import React from "react";

const MemoNameComponent = ({ name }) => {
  console.log("Name Component Render ...");
  return (
    <>
      <h1>Name : {name}</h1>
    </>
  );
};

export default React.memo(MemoNameComponent);
