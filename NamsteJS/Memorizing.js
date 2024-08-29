const cal = (n) => {
  let sum = 0; // Initialize sum inside the function
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

const memorized = (fn) => {
  let cache = {};

  return function (...args) {
    let n = args[0];
    // console.log(cache);
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    } else {
      console.log("Calculating ... ");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const ans = memorized(cal);
console.log(ans(5)); // Calculates and stores the result in the cache
console.log(ans(5)); // Retrieves the result from the cache
console.log(ans(10)); // Calculates and stores a new result in the cache
