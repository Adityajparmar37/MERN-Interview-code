import React, { useMemo } from "react";

const MemoMarksComponent = ({marks,subject}) => {
    console.log("Marks Component Render ... ");
    
    const percentageMark = useMemo(() => {
        console.log("Calculating Percentage ... ")
        return (marks * 100) / 100;
    },[marks]);

  return (
    <>
      <h1>Marks : {marks}</h1>
      <h1>Subject : {subject}</h1>
      <h1>percentage : {percentageMark}%</h1>
    </>
  );
}

export default React.memo(MemoMarksComponent);
