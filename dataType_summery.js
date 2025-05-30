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




// Memory : Stack(Primitive) and Heap(Non-Primitive)
console.log("===========================================")

let userEmail = "maruf@gmail.com"; // Primitive
let anotherEmail = userEmail; // Copy by value   
console.log(userEmail,"\n",anotherEmail); // Both are same

anotherEmail = "hassan@gmail.com"
console.log(userEmail,"\n",anotherEmail); // userEmail is unchanged


console.log("===========================================")

// Non-Primitive
let userOne = {
    name: "Maruf",
    age: 22
}

let userTwo = userOne; // Copy by reference
console.log(userOne, "\n", userTwo); // Both are same
console.log("\n")

userTwo.name = "Hassan"; // Changing userTwo will change userOne as well
console.log(userOne, "\n", userTwo); // userOne is changed because both are pointing to the same object in memory

console.log("\n")

userOne.age = 23; // Changing userOne will change userTwo as well
console.log(userOne, "\n", userTwo); // userTwo is changed because both are pointing to the same object in memory

