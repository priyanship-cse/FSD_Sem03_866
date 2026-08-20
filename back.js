//calculator with the help of callback fuinction 

function calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", calculator(10, 5, add));
console.log("Subtraction:", calculator(10, 5, subtract));
console.log("Multiplication:", calculator(10, 5, multiply));
console.log("Division:", calculator(10, 5, divide));