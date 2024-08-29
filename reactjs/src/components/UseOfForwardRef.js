import React, { useRef } from "react";
import InputField from "./InputField";

export default function UseOfForwardRef() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus(); 
  }

  return (
    <div>
      <InputField ref={inputRef} />
      <button onClick={handleClick}>
        Focus on Input
      </button>
    </div>
  );
}
