let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

let result =
 "Sum: " + sum + "<br>" +
"Product: " + product + "<br>" +
"Average: " + average;

document.body.innerHTML += result;