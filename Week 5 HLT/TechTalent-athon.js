
//create race number
let raceNumber = Math.floor(Math.random()*1000)


//create early registration 
let earlyRegistration = true


//create runner age
let runnerAge = 19

console.log (raceNumber)


//for adults with early registration add 1000 to race number
if (runnerAge >= 18 && earlyRegistration == true) {
    raceNumber += 1000
}

console.log(raceNumber)


//advise race time for early registration adults and late registration adults
if (runnerAge >= 18 && earlyRegistration == true) {
    console.log(`${raceNumber}, your race will begin at 9:30 am.`)
} else if (runnerAge >= 18 && earlyRegistration == false) {
    console.log(`${raceNumber}, your race will begin at 11:00 am.`)
}


//advise race time for under 18's
if (runnerAge < 18) {
    console.log(`${raceNumber}, your race will begin at 12:30 pm.`)
} else if (runnerAge == 18)  {
    console.log(`${raceNumber}, please see the registration desk.`)
}


