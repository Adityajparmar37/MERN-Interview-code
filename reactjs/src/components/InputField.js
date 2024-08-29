import React, { forwardRef } from "react";

const InputField = forwardRef(({ prop }, ref) => {
  console.log(prop);
  return (
    <div>
      <input type="text" ref={ref} {...prop} />
    </div>
  );
});

export default InputField;
