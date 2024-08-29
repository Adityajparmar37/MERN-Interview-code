import React, {
  useCallback,
  useState,
} from "react";
import CallBackButton from "./CallBackButton";

const UseCallBackCount = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevcount) => prevcount + 1);
  }, []);

  // useEffect(() => {
  //   console.log("useEffect calling .... ");
  // }, [increment]);

  console.log("UseCallBackCount comp render ...");

  return (
    <>
      <h1>{count}</h1>
      <CallBackButton increment={increment} />
    </>
  );
};

export default UseCallBackCount;
