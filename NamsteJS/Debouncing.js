let counter = 0;

const getData = () => {
  console.log("Fecting the data ... ", counter++);
};

const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    let context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData,3000);
