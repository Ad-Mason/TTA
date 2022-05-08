

//my fruits array 
var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"]


for (let fruit in fruits)  {
    //console.log(fruit)
    var vowels = 0
    var consonants = 0
    //console.log(fruit.length)
    for (var i = 0; i < fruits[fruit].length; i++){
       if (fruits[fruit][i] == "A") {
           vowels ++
       } else {
           consonants ++
       }
       //console.log(fruits[fruit][i])
    }
    console.log(`${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`)
} 
 