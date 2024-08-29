// function x() {
//   console.log("hello");
// }

// function y(n) {
//   n();
// }

// y(x);

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const Arrradius = [1, 2, 3];

const Output = Arrradius.map(area);
console.log(Output)