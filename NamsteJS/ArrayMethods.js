let arr = [1, 2, 3, 4, 0, 100, 12000, 200];

// => length of array
// console.log(arr.length);

// => push and pop
// arr.push(5);
// arr.pop();
// console.log(arr);

// => unshift and shift
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// => every and some
// const result = arr.every((ele) => ele > 2);
// console.log(result);
// const result = arr.some((ele) => ele > 3);
// console.log(result);

// => sort array
// sort method convert the element into string and then comapre it as UTF-16 code
// console.log(arr.sort());

// console.log(arr.sort((a, b) => a - b));
// const arr2 = ["March", "April", "Jan"];
// console.log(
//   arr2.sort((a, b) => {
//     return a.localeCompare(b);
//   })
// );

// => find is use to find the first element
// const found = arr.find((ele) => ele > 2);
// const found = arr.findIndex((ele) => ele > 2);
// const found = arr.findLast((ele) => ele > 2);
// const found = arr.findLastIndex((ele) => ele > 2);
// console.log(found);

// //=> fill
// arr.fill(0, 2, 4); // (element to be filled, start, end)
// console.log(arr);

// => reverse
// arr.reverse();
// const ans = arr.toReversed();
// console.log(ans);

// => join
// console.log(arr.join());

// => includes
// console.log(arr.includes(5000));

// => isArray
// console.log(Array.isArray(arr));

// // => reduce
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// => slice
const arr2 = ["A", "B", "C", "D", "E"];
// // const res = arr2.slice(0, 2); // endIndex is exclusive
// const res = arr2.slice(1,-1);  // 1 and -1 ni vache nae
// console.log(res);

// => splice  (GoTo index, How many to remove, Element to insert)
// arr2.splice(1, 0, "Z");
// arr2.splice(2,3);
// arr2.splice(3, 1, "Y");
// console.log(arr2);

// => map
// const res = arr2.map((elem) => elem + "C");
// console.log(res);

// // => filter
// const res = arr2.filter((elem) => elem > "C");
// console.log(res);
