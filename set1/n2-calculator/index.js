/*
 * Full Name: Jhasmine M. Aquino
 * Section: IV-BSIT-A
 * Activity Code: N2 - Modular Calculator
 * Date: November 21, 2026
 */

const path = require("path");

const operations = require("./operations");
const { formatResult } = require("./formatter");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


console.log(`Running ${path.basename(__filename)}`);

// If walang operation na nilagay sa command magstop na ang program. 
if (!operation) {
    console.log("Error: No operation given.");
    console.log("Example command: node index.js add 8 7");
    process.exit(1);
}

// Checks if the operation entered is in the array
const validOperations = ["add", "subtract", "multiply", "divide", "average"];
if (!validOperations.includes(operation)) {
    console.log(`Error: Unknown operation '${operation}'.`);
    console.log(`Valid operations: ${validOperations.join(", ")}`);
    process.exit(1);
}

// This make sure na numbers ang binigay ng user
if (process.argv[3] === undefined || process.argv[4] === undefined || isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter two valid numbers. Example: node index.js add 12 8");
    process.exit(1);
}

try {
    const result = operations[operation](num1, num2);

// This sends the result to formatter.js 
    console.log(formatResult(operation, num1, num2, result));

} catch (error) {
// Throws an error. Ex. kapag nag enter ng 0 sa second number for division
    console.log(`Error: ${error.message}`);
}