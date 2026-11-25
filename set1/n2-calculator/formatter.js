/*
 * Full Name: Jhasmine M. Aquino
 * Section: IV-BSIT-A
 * Activity Code: N2 - Modular Calculator 
 * Date: November 21, 2026
 */


function formatResult(operation, num1, num2, result){
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/",
        average: "average"
    };

    if (operation === "average") {
        return `The average of ${num1} and ${num2} is ${result}`;
    }

    return `${num1} ${symbols[operation]} ${num2} = ${result}`;
}

//Export so index.js can import this function
module.exports = {formatResult};