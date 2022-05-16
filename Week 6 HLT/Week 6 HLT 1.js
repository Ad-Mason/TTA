
//create variables

var temperature
var condition
var goToWork
var continuousAnalysis = "true"
var message

do {   (function()  {

//request user inputs

temperature = prompt("What is the current temperature in degrees celsius?");

condition = prompt("What is the current weather condition? Please enter either sunny, cloudy, raining, snowing or thunder");

//evaluate weather condition + temperature to set gotowork and message values

switch(condition.toLowerCase()){
  case "sunny" :
    if (temperature >30) {
      goToWork = false;
      message = 5;
    } else if (temperature >20) {
      goToWork = true;
      message = 1;
    } else if (temperature <10) {
      goToWork = false;
      message = 6;
    } else if (temperature >=10) {
      goToWork = true;
      message = 1;
    }
    break;
  case "cloudy" :
    if (temperature >30) {
      goToWork = false;
      message = 5;
    } else if (temperature >20) {
      goToWork = true;
      message = 1;
    } else if (temperature <10) {
      goToWork = false;
      message = 6;
    } else if (temperature >=10) {
      goToWork = true;
      message = 1;
    }
    break;
  case "raining" :
    if (temperature >30) {
      goToWork = false;
      message = 5;
    } else if (temperature >20) {
      goToWork = true;
      message = 3;
    } else if (temperature <10) {
      goToWork = false;
      message = 6;
    } else if (temperature >=10) {
      goToWork = false;
      message = 7;
    }
    break;
  case "snowing" :
    if (temperature >30) {
      goToWork = false;
      message = 4;
    } else if (temperature >20) {
      goToWork = false
      message = 4
    } else if (temperature <10) {
      goToWork = false;
      message = 6;
    } else if (temperature >=10) {
      goToWork = false
      message = 2
    }
    break;
  case "thunder" :
    if (temperature >30) {
      goToWork = false;
      message = 5;
    } else if (temperature >20) {
      goToWork = false;
      message = 2;
    } else if (temperature <10) {
      goToWork = false;
      message = 6;
    } else if (temperature >=10) {
      goToWork = false;
      message = 2;
    }
    break;
}


//output message 

switch(message){
  case 1:
    console.log("You can continue working on your new lab today, Kelvin");
  break;
  case 2:
    console.log ("It's not safe to work today, Kelvin");
  break;
  case 3:
    console.log("You can continue working on your new lab today, Kelvin, as being warm and wet isn't the worst");
  break;
  case 4:
    console.log("The weather is too weird today, Kelvin");
  break;
  case 5:
    console.log("It's too hot to work effectively today, Kelvin");
  break;
  case 6:
    console.log("It's too cold to work effectively today, Kelvin");
  break;
  case 7:
    console.log("No one likes being wet and cold, Kelvin");
  default:
    return "That weather condition is not recognised";
}

}())
}


while(continuousAnalysis);

