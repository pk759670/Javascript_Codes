let score=33

//console.log(typeof score);
// console.log(typeof (score));

let score1="33"
// console.log(typeof score1);

let valueInNumber=Number(score1)
// console.log(valueInNumber);

let score2="33abc"
let vInNumber=Number(score2)
//console.log(vInNumber);

let score3=null
let vInNumber1=Number(score3)

//console.log(vInNumber1);
//console.log(typeof vInNumber1); 

let score4= undefined
let vInNumber2=Number(score4)

// console.log(vInNumber2);
// console.log(typeof vInNumber2);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0;undefined => NaN(Not A Number)

let name="34"

console.log([typeof String(name), String(name)]);

let isloggedIn = 1
let booleanIsloggedIn = Boolean(isloggedIn)
// console.log(booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

 //console.log(+true); // give 1
 //console.log(+""); // give 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
