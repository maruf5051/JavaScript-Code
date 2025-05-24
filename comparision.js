// Compare two integers numbers
// console.log(2 = 2) // Syntax Error: Use '==' for comparison, '=' is for assignment
console.log(2 == 2) // Correct comparison(loose equality)
console.log(5 != 2) // Not equal to
console.log(2 == 2) // Loose equality (value only)
console.log(5 > 2)  // Greater than
console.log(5 < 2)   // Less than
console.log(6 <= 4)  // Less than or equal to
console.log(6 >= 4)  // Greater than or equal to
console.log(5 === 2) // Strict equality (both value and type)

console.log("\n------------------------------\n")

// Complare two different types of data
console.log(5 == '5') // Loose equality (value only, different types)
console.log(5 === '5') // Strict equality (value and type, different types)
console.log("5" >= 2) // Loose comparison (string and number, string is converted to number)

console.log("\n------------------------------\n")

// identify some problems 
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)

console.log(NaN == 0); // NaN is not equal to anything, including itself

console.log("------------------------------\n")

console.log(undefined == 0); // undefined is not equal to anything, including null
console.log(undefined > 0); // undefined is not greater than anything
console.log(undefined >= 0); // undefined is not greater than or equal to anything


