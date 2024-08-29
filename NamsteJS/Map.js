const iterables = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const elem of iterables) {
  console.log(elem[0]);
}

for (const elem of iterables) {
  console.log(elem[1]);
}

for (const [key,value] of iterables) {
  console.log(value);
}


