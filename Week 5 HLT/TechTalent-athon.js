

let raceNumber = Math.floor(Math.random()*1000)

let earlyRegistration = true

let runnerAge = 18

console.log (raceNumber)

if (runnerAge >= 18 && earlyRegistration == true) {
    raceNumber += 1000
}

console.log(raceNumber)

if (runnerAge >= 18 && earlyRegistration == true) {
    console.log(`${raceNumber}, your race will begin at 9:30 am.`)
} else if (runnerAge >= 18 && earlyRegistration == false) {
    console.log(`${raceNumber}, your race will begin at 11:00 am.`)
}

if (runnerAge < 18) {
    console.log(`${raceNumber}, your race will begin at 12:30 pm.`)
} else if (runnerAge = 18)  {
    console.log(`${raceNumber}, please see the registration desk.`)
}


