// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

// equality operator (==) does not convert null into 0 and give "false" result
//and > ,>= etc convert null into 0
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  it is a strict check
// it first check data type then use coversion 
console.log("2" === 2);// give false as "2" is string and 2 is number