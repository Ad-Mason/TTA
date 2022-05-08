let firstValue = prompt()
let secondValue = prompt()
let operation = prompt()



function multiplication(firstValue, secondValue) { 
    return firstValue * secondValue;
}
function addition(firstValue, secondValue) { 
    return firstValue + secondValue;
}
function subtraction(firstValue, secondValue) { 
    return firstValue - secondValue;
}
function division(firstValue, secondValue) { 
    return firstValue / secondValue;
}
function toThePowerOf(firstValue, secondValue) { 
    return firstValue ^ secondValue;
}

switch (operation) {
case "additon" : addition()

break;
case "subtraction" :subtraction()

break;
case "division" : division()

break;
case "multiplication" : multiplication()

break;
case "toThePowerOf" : toThePowerOf ()

}

console.log( `${firstValue} ${operation} ${secondValue} = ${result}` )