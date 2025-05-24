let name = "Maruf"
let age = 22

// console.log(name + " " + age) // Concatenation with space
// prefer way: string interpolation
console.log(`My name is ${name} and I am ${age} years old.`)    // Template literals with variables


// declaration of string in objects type
let fullName = new String("Maruf Al Abdullah")
console.log(fullName)

console.log("===========================================")

// String methods
let userName = "maruf sikder"

console.log(userName[0]) // Accessing first character
console.log(userName.length) // Length of the string
console.log(userName.toUpperCase()) // Convert to uppercase
console.log(userName.toLowerCase()) // Convert to lowercase
console.log(userName.charAt(2)) // Character at index 2
console.log(userName.indexOf('s'))  // Index of first occurrence of 's'

console.log("===========================================")

// substring and slice
let greeting = "Hello, World!"
console.log(greeting.length) // Length of the string
console.log(greeting.substring(0, 5)) // Extract substring from index 0 to 5

console.log(greeting.slice(7, 12)) // Extract substring from index 7 to 12
console.log(greeting.slice(-6)) // Extract last 6 characters
console.log(greeting.slice(-7)) // Extract from index 7 to end
console.log(greeting.slice(-6, -1)) // Extract last 6 characters excluding last character

console.log("===========================================")

// trim and replace
let messyString = "   Hello, World!   "
console.log(messyString.trim()) // Remove whitespace from both ends
console.log(messyString.replace("World", "Universe")) // Replace 'World' with 'Universe'

// split
let sentence = "This is a sample sentence."
console.log(sentence.split(" "), typeof sentence) // Split by space and check type

