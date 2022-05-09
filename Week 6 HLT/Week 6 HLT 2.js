

//my fruits array 
var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"]


for (let fruit in fruits)  {
    //console.log(fruit)
    var vowels = 0
    var consonants = 0
    //console.log(fruit.length)
    for (var i = 0; i < fruits[fruit].length; i++){
       if (fruits[fruit][i].toLowerCase() == "a" || fruits[fruit][i].toLowerCase() == "e" || fruits[fruit][i].toLowerCase() == "i" || fruits[fruit][i].toLowerCase() == "o" || fruits[fruit][i].toLowerCase() == "u") {
           vowels ++
       } else {
           consonants ++
       }
       //console.log(fruits[fruit][i])
    }
    console.log(`${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`)
} 
 