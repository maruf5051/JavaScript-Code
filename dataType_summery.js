// Primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const fullName = "Maruf Sikder" // String
console.log(fullName, typeof fullName)

const age = 22 // Number
console.log(age, typeof age)

const height = 5.4 // Number
console.log(height, typeof height)

const isLoggedIn = true // Boolean
console.log(isLoggedIn, typeof isLoggedIn)

const value = null // null
console.log(value, typeof value)

const value2 = undefined // undefined
console.log(value2, typeof value2)

const id = Symbol("123") // Symbol
console.log(id, typeof id)

const id2 = Symbol("123") // Symbol
console.log(id === id2) // false

const BigInt = 1234567890123456789012345678901234567890n // BigInt
console.log(BigInt, typeof BigInt)


console.log("===========================================")


// Non-Primitive
// 3 types : Object, Array, Function

// Object
let person = {
    name: "Maruf Sikder",
    age: 22
}
console.log(person, typeof person)

// Array
let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits, typeof fruits)

//function
let myFunction =  function greet() {
    console.log("Hello, World!");
}
console.log(myFunction, typeof myFunction)




