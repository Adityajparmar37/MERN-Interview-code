// spread operator

const arr = [1, 1, 2, 5, 3, 4, 5];

// merge two array
const arr2 = ["A", "B", "C", "D"];
const MergeArr = [...arr, ...arr2];
console.log(MergeArr);

// clone an array
const arr3 = [...arr2];
console.log(arr3);

// rest operator
let Sum;
function sum(...Args) {
  Sum = Args.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4, 5);
console.log(Sum);
