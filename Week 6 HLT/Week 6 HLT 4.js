// let firstValue = prompt("Enter a number")
// let secondValue = prompt("Enter a second number")
// let operation = prompt("Enter operator for calculation (+, -, *, /,^):");

let firstValue = 5;
let secondValue = 10;
let operation = "^";

function addition(firstValue, secondValue) { 
    return firstValue += secondValue;
}
function subtraction(firstValue, secondValue) { 
    return firstValue - secondValue;
}
function multiplication(firstValue, secondValue) { 
    return firstValue * secondValue;
}
function division(firstValue, secondValue) { 
    return firstValue / secondValue;
}
function toThePowerOf(firstValue, secondValue) { 
    return firstValue ** secondValue;
}


let result

switch (operation) {
case "+" : result = addition(firstValue, secondValue);
break;

case "-" : result = subtraction(firstValue, secondValue);
break;

case "/" : result = division(firstValue, secondValue);
break;

case "*" : result = multiplication(firstValue, secondValue);
break;

case "^" : result = toThePowerOf (firstValue, secondValue);
}

console.log(`${firstValue} ${operation} ${secondValue} = ${result}`)





