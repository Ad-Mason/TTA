//creating var to to show todays temp in Kelvin
const kelvin = 293;


//creating new var to show todays temp in Celsius by using value of Kelvin
let celsius = kelvin - 273;


//creating new var to show todays temp in Fahrenheit calculated from value of celcius
let fahrenheit = celsius*(9/5)+32;


//.floor() method applied to fahrenheit to round down fahrenheit to integer 
Math.floor(fahrenheit) = fahrenheit


console.log('The temperature is ${fahrenheit} degrees Fahrenheit.')






