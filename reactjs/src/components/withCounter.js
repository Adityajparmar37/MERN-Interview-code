import { useState } from "react";

// const NewComponent = withCounter(ClickCounter);
// old component nae ek funciton ni enader wrappe kari new Component banvi return kar

const withCounter = (
  OldComponent,
  incrementby = 1
) => {
  return function EnhancedComponent() {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        count={count}
        incrementCount={() =>
          setCount(count + incrementby)
        }
      />
    );
  };
};

export default withCounter;
