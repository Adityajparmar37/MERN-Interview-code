import React, {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export default function LayoutVsEffect() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("UseEffect runs");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
}

// The console log "useLayoutEffect - before DOM updated" will appear before the "useEffect - DOM updated" log, even though both are dependent on the same count state change.


