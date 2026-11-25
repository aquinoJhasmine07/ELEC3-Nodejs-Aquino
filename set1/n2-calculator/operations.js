/*
 * Full Name: Jhasmine M. Aquino
 * Section: IV-BSIT-A
 * Activity Code: N2 - Modular Calculator 
 * Date: November 21, 2026
 */

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
     if (num2 === 0) {
        throw new Error ("Cannot divide by 0!");
    }

    return num1 / num2;
}

function average(num1, num2) {
    return (num1 + num2) / 2;
}

//Export so index.js can import these functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};