
//ask user to input 2 values and an operator for a calculation

let firstValue = prompt("Enter a number")
let secondValue = prompt("Enter a second number")
let operation = prompt("Enter operator for calculation (+, -, *, /,^):");

//adding the 2 input values

function addition(firstValue, secondValue) { 
    return firstValue += secondValue;
}
//subtracting value 2 from value 1

function subtraction(firstValue, secondValue) { 
    return firstValue - secondValue;
}

//multiplying value 1 by value 2
function multiplication(firstValue, secondValue) { 
    return firstValue * secondValue;
}

//dividing value 1 by value 2
function division(firstValue, secondValue) { 
    return firstValue / secondValue;
}

//value 1 to the power of value 2
function toThePowerOf(firstValue, secondValue) { 
    return firstValue ** secondValue;
}


let result

//call the function according to the matching operator

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

//log the calculation and result

console.log(`${firstValue} ${operation} ${secondValue} = ${result}`)





