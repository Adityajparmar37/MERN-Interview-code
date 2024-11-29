let Name = {
  firstname: "Aditya",
  lastname: "Parmar",
};

let printName = function (city, state, country) {
  //   console.log(this);
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      city +
      " " +
      state +
      " " +
      country
  );
};

let printMyName = printName.bind(Name);
printMyName("Surat");

// our own bind function
// we create this polyfill becz many old browser does not support latest ES6 and its method like bind hence at that place we can use are own bind function
Function.prototype.mybind = function (...args) {
  let obj = this;
  console.log(this);
  //   params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...args2]);
  };
};

let printMyName2 = printName.mybind(Name);
printMyName2("Surat", "Gujarat", "India");


// This polyfill checks if the includes method exists on Array.prototype. If it doesn't, it provides an alternative implementation using indexOf.
if (!Array.prototype.includes) {
  Array.prototype.includes = function (element, fromIndex) {
    return this.indexOf(element, fromIndex) !== -1;
  };
}
