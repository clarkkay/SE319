/*
Kayley Clark
Feb 8, 2023
Activity 06 - Variables
*/
console.log("Q1 -----------")
var var1 = "Iowa";
console.log(var1);

var var1 = 124;
console.log(var1);

// Is it permited?
console.log("Yes");

console.log("Q2 ----------");
let var2 = "Ames";
console.log(var2);

//let var2 = "124";

//is it valid?
console.log("Not");

console.log("Q3 -----------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);

console.log("Valid ? Yes");

console.log("Q4 ----------");
let var4;
//const var5;

console.log("What's the error : const needs to be initialized to some value, as it can never be reassigned.");

console.log("Q5 ---------");
const var6 = "3.1415";
//var6 = 2.8;
console.log("Whats the error: const cannot be redefined or reassigned a new value it will always stay the same.");

console.log("Q6 ----------");
//let first name = "Kayley";
console.log("variables must be in one word, spaces are not allowed in variable names.")

//let 2numbers = [1,2];
console.log("You cannot have a variable start with a number. ")

//let city-state = "Ames,Iowa";
console.log("You also cannot have - hiphen symbols in variables. but underscore values are allowed.");

console.log("Q7 ----------");
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity);
console.log("the comma operator appends to the end of the console log, or acts like a + operator.")

console.log("Q8 -----------");
if(5 === 5){
    var var7 = 100;
}
console.log(var7);

// if(5 === 5){
//     let var8 = 120;
// }
// console.log(var8);

console.log("While let inside the loop is fine, the variable outside of the block will not work, as it exceeds the scope. ")
