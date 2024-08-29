           //01234567891011
const str = "Aditya Parmar";
// console.log(str.length);
// console.log(str.substring(5,4));
// console.log(str.indexOf("Par"));
// console.log(str.trim());
// console.log(str.at(-1));
// console.log(str.charAt(5));
// console.log(str.endsWith("r"));
// console.log(str.startsWith("A"));
// console.log(str.includes("Adi"));

// const regex = /[A-P0-9]/ig;
// console.log(str.match(regex));

//Does not change the original Stirng, rather return the new String
// const newStr = str.replace("Aditya", "adi");
// console.log(str);
// console.log(newStr);

// it will also does not change the original string
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


//it will also does not change the original string, rather returns the new stirng
console.log(str.slice(4));


// it will split words as i have giving space as the pattern and two letter together do not contain the space. Space is always between two words
console.log(str.split(" "));

// will split each and every letter if there is no pattern in it
console.log(str.split(""));
console.log(str);


