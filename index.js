const { addition, subtraction, multiplication, division } = require('./operations.js');

console.log(addition(Number(process.argv[3]), Number(process.argv[4])));
console.log(subtraction(process.argv[3], process.argv[4]))
console.log(multiplication(process.argv[3], process.argv[4]))
console.log(division(process.argv[3], process.argv[4]))

// --------------------------------------------------------------

const message = process.argv[2]

console.log(message)



