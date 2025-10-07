let score = "22abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// If you convert a non-numeric string to a number, the result will be.......
// "22" => 22
// "22abc" => NaN
// true => 1, false => 0

// print new line
console.log("\n")

let isLoggedIn = 1
let isLoggedInBoolean = Boolean(isLoggedIn)

console.log(isLoggedInBoolean)

// 0 => false, 1 => true
// "" => false
// "maruf" => true
// "1" => true
// undefined => false
// null => false
// NaN => false
// 4 => true
console.log("\n")

let id = 5051

let isString = String(id)
console.log(typeof isString)
console.log(isString)

console.log("\n");



// ######### Operators #########

console.log(5 + 5) // addition
console.log(5 - 5) // subtraction
console.log(5 * 5) // multiplication
console.log(5 / 5) // division
console.log(5 % 5) // modulus
console.log(5 ** 5) // exponentiation
console.log(5 % 2) // remainder

console.log("\n")


// increment
let increment = 5
increment++
console.log(increment) // 6

increment += 5
console.log(increment) // 11

console.log("\n")

// decrement
let decrement = 5
decrement--
console.log(decrement) // 4
decrement -= 5
console.log(decrement) // -1


console.log("\n")


console.log(1 + 2 + "3")
console.log(1 + "2" + 3)
console.log("1" + 2 + 3)

