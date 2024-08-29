let counter = 0;

const getData = () => {
  console.log("Fetching data ... ", counter++);
};

const throttle = (fn, limit) => {
  let flag = true;

  return function (...args) {
    let context = this;

    if (flag) {
      fn.call(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(getData, 3000);
window.addEventListener("resize", betterFunction);
