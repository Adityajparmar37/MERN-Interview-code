import React, { useRef } from "react";

export default function UseRefHook() {
  const ref = useRef(0);
  // const [count, setCount] = useState(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    // setCount(ref.current);
    alert(`you click: ${ref.current} times`);
  };
  // console.log(ref.current);
  return (
    <>
      <h1>{ref.current}</h1>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

//However, since useRef does not cause a re-render when current is updated, the displayed value in the h1 element will always be the initial value (0) and will not update as you click the button. The alert will correctly display the incremented value, but the h1 text will not reflect this change.

// If you want the h1 text to update with each click, you should use the useState hook instead of useRef.
