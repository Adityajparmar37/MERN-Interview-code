const str = "madam";

// arrow function to check string Palidrome

const checkStr = (str) =>
  str === str.split("").reverse("").join("");

console.log(checkStr(str));
