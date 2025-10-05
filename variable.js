const PI = 3.14159; // unchangeable
var radius = 5; // Value Changeable

// radius = 10;

var area = PI * radius * radius
console.log("Area = " + area)

let userName = "Maruf Sikder" // Value changeable

console.log("Name: " + userName)

accountId = 123 // Global variable
console.log("Account ID: " + accountId)

let accountName; // Local variable
accountName = "Maruf Sikder" // Value changeable
console.log("Account Name: " + accountName)

console.table([accountId, accountName, userName, area])




/*
Prefer not to be use var
because of issues in block scope and function scope 
Use let and const 

const is not changeable
let is changeable
*/
