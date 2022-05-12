

//ask user to input 2 values and an operator for a calculation


let answer = "";

while (answer.toLowerCase() !== "no"){

let firstValue = prompt("Enter a number")
let operation = prompt("Enter operator for calculation (+, -, *, /,^,sin,cos,tan):");
let secondValue

switch (operation) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    secondValue = prompt("Enter another number");
}

//sin calculation
function sin(firstValue) { 
    if (!secondValue){
    return Math.sin(firstValue);
    }
}

//cos calculation
function cos(firstValue) { 
    if (!secondValue){
    return Math.cos(firstValue);
    }
}

//tan calculation
function tan(firstValue) { 
    if (!secondValue){
    return Math.tan(firstValue);
    }
}

//adding the 2 input values

function addition(firstValue, secondValue) { 
    return firstValue + secondValue;
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

case "sin" : result = sin(firstValue)
break;

case "cos" : result = cos(firstValue)
break;

case "tan" : result = tan(firstValue)
break;

case "+" : result = addition(firstValue, secondValue)
break;

case "-" : result = subtraction(firstValue, secondValue)
break;

case "/" : result = division(firstValue, secondValue)
break;

case "*" : result = multiplication(firstValue, secondValue)
break;

case "^" : result = toThePowerOf (firstValue, secondValue)
}

//log the calculation and result

if (firstValue && secondValue) {
    console.log(`${firstValue} ${operation} ${secondValue} = ${result}`);
} else {
    console.log(`${operation} ${firstValue} = ${result}`)
}

answer = prompt("Would you like to do another calculation?");

}





