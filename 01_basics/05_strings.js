const name = "Ramesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ramesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// substring()
// If endIndex is omitted, substring() extracts characters to the end of the string.
// If startIndex is greater than endIndex, substring() swaps the two arguments.
// If either startIndex or endIndex is less than 0 or NaN, it is treated as 0.
// If either argument is greater than the length of the string, it is treated as the length of the string.

let str = "Hello, World!";
console.log(str.substring(7, 12)); // "World"
console.log(str.substring(12, 7)); // "World" (arguments are swapped)
console.log(str.substring(7));     // "World!"

// slice()
// If endIndex is omitted, slice() extracts characters to the end of the string.
// If startIndex is greater than endIndex, slice() does not swap the arguments and returns an empty string.
// If startIndex or endIndex is negative, it is treated as string.length + startIndex or string.length + endIndex.
// If startIndex or endIndex is greater than the length of the string, it is treated as the length of the string.

let str1 = "Hello, World!";
console.log(str1.slice(7, 12));  // "World"
console.log(str1.slice(12, 7));  // "" (no swap)
console.log(str1.slice(7));      // "World!"
console.log(str1.slice(-6, -1)); // "World"


//////

const newStringOne = "   ramesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ramesh.com/ramesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false

console.log(gameName.split('-'));