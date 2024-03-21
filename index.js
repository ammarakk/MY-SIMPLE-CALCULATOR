#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumer" },
    { message: "Enter second number", type: "number", name: "secondNumer" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumer + answer.secondNumer);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumer - answer.secondNumer);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumer * answer.secondNumer);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumer / answer.secondNumer);
}
else {
    console.log("Please select valid operator");
}
