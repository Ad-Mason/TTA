
//create variables

var temperature
var condition
var goToWork
var continuousAnalysis = "true"

do {   (function()  {

//ask user to input tmeperature and weather condition

temperature = prompt("What is the current temperature?");

condition = prompt("What is the current weather condition? Please enter either sunny, cloudy, raining, snowing or thunder");

if (condition.toLowerCase === "sunny" || "raining" || "snowing" || "thunder") {
  condition = prompt("Sorry that weather condition is not recognised, please enter either sunny, cloudy, raining, snowing or thunder")
}

  //when temperature is over 30 the following condition will set the boolean value of goToWork 
  
if (temperature > 30){

       goToWork = false
  
    }

  //when temperature is over 20 the following condition will set the boolean value of goToWork 

  else if (temperature > 20){

      switch (condition.toLowerCase()) {
        case "sunny" :
       goToWork = true
      break;
        case "cloudy":
       goToWork = true
      break;
        case "raining" :
       goToWork = true
      break;
        case "snowing" :
       goToWork = false
      break;
        case "thunder" :
       goToWork = false
      break;   }
  
    }     
  

  //when temperature is 10 or above the following condition will set the boolean value of goToWork

  else if(temperature >= 10)  {

     switch (condition.toLowerCase()) {
       case "sunny" :
     goToWork = true
     break;
       case "cloudy":
     goToWork = true
     break;
       case "raining" :
     goToWork = false
     break;
       case "snowing" :
     goToWork = false
     break;
       case "thunder" :
      goToWork = false
     break;   }

    } 


    //when temperature is under 10 the following condition will set the boolean value of goToWork 

    else if (temperature < 10){

     goToWork = false
     }

  


    //Use goToWork value to display statement whether Kelvin should or shouldnn't go work

  if (goToWork && condition == "raining" && temperature > 20) {
      console.log("Being warm and wet isn't the worst, you can continue working on your new lab today, Kelvin");
  }
    else if (goToWork) {
      console.log("You can continue working on your new lab today, Kelvin");

  } else if (temperature < 10){
      console.log("It's too cold to work effectively today, Kelvin");

  } else if (condition == "snowing" && temperature > 20) {
      console.log("The weather is too wierd today, Kelvin");

  } else if (temperature > 30){
      console.log("It's too hot to work effectively today, Kelvin");

  } else if (condition == "thunder" && temperature > 20) {
      console.log("It's not safe to work today, Kelvin");

  } 
}())  
}


while(continuousAnalysis);

