const score = 100;
console.log(score);

const value = new Number(42)
console.log(value);

console.log(value.toString().length);
console.log(value.toExponential(2));
console.log(value.toFixed(2));
console.log(value.toPrecision(3));
console.log(value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log(value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
console.log(value.toLocaleString('bn-BR', { style: 'currency', currency: 'BRL' }));

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // Random integer between 1 and 100

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20st