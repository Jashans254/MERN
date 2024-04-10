let score = 33 

console.log(typeof score);
console.log(typeof (score));

let score1 = "33"
console.log(typeof score1);

let score2 = "33abc"
console.log(typeof score2);

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1);

// will convert null to 0 on number()
// "33" to 33
// "33abc" to NaN
// true to 1 , false to 0 

let isloggedIn = 1 
let booleanIsshaggedIn = Boolean(isloggedIn)
console.log(booleanIsshaggedIn);

// boolean()
// " " to false , "nano" to 1


/*----------------------------------------------*/

let value = 3 
let negValue = -value 

//concate 
let str1 = "Hello"
let str2 = " hitesh"
let str3 = str1 + str2

console.log(str3)

//not a good practice
// read toprimitive docs
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1" + 2);

//use paranthesis to resolve confusion 

console.log(true);
console.log(+true);
// console.log(true+);

let num1 ,num2 , num3 
num1 = num2 = num3 = 2+2


//pre vs post increment decrement
let gameCounter = 100
gameCounter++;
++gameCounter;
