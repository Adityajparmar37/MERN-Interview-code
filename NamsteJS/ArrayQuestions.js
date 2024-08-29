const arr = [1, 1, 2, 5, 3, 4, 5];

// find the sum of the array element
// const sum = arr.reduce(
//   (acc, curr) => acc + curr,
//   0
// );
// console.log(sum);

// // remove duplicate element
// const unqArr = [...new Set(arr)];
// console.log(unqArr);

// const output = arr.map((x)=>x.toString(2));
// console.log((Number(output[3])));

const users = [
  {
    firstName: "Aditya",
    lastName: "Parmar",
    age: 21,
  },
  {
    firstName: "Maitri",
    lastName: "Modi",
    age: 20,
  },
  {
    firstName: "Nidhi",
    lastName: "Topiwala",
    age: 21,
  },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);
