
var temperature
var condition
var goToWork

// temperature = prompt("what is the temperature?")

// condition = prompt("what is the weather condition?")

temperature = 9

condition = "sunny"

 //when temperature is over 10 the following condition will set the boolean value of goToWork

 if(temperature > 10)  {

  switch (condition.toLowerCase) {
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

  //when temperature is over 20 the following condition will set the boolean value of goToWork 

    else if (temperature > 20){

    switch (condition.toLowerCase) {
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

    //when temperature is over 30 the following condition will set the boolean value of goToWork 
  
    else if (temperature > 30){
      
    switch (condition.toLowerCase) {
      case "sunny" :
     goToWork = false
    break;
      case "cloudy":
     goToWork = false
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
      
    switch (condition.toLowerCase) {
      case "sunny" :
     goToWork = false
    break;
      case "cloudy":
     goToWork = false
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


    //Use goToWork value to display statement whether Kelvin should or shouldnn't go work

  if (goToWork) {
  console.log("Get to work Kelvin, you crazy bastard.")
  } else {
   console.log("Don't go to work Kelvin, it's not safe.")
  } 
