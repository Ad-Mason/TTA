

//my fruits array 
var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"]

//loop through my fruits array to find the number of vowels and consonants 
for (let fruit in fruits)  {


    var vowels = 0
    var consonants = 0

    for (var i = 0; i < fruits[fruit].length; i++){
       if (fruits[fruit][i].toLowerCase() == "a" || fruits[fruit][i].toLowerCase() == "e" || fruits[fruit][i].toLowerCase() == "i" || fruits[fruit][i].toLowerCase() == "o" || fruits[fruit][i].toLowerCase() == "u") {
           vowels ++
       } else {
           consonants ++
       }

    }
    //Output number of vowels and consonants in each fruit beginning with An for fruits starting with a vowel and A for the rest
    if (vowels < 2 && (fruits[fruit][0].toLowerCase() =="a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u")) {
        console.log(`An ${fruits[fruit]} has ${vowels} vowel and ${consonants} consonants`)
    } 
    
    else if (consonants < 2 && (fruits[fruit][0].toLowerCase() =="a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u")) {
        console.log(`An ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonant`)
    } 

    else if (fruits[fruit][0].toLowerCase() =="a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u") {
        console.log(`An ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`)
    } 
    
    else if (vowels < 2) {
        console.log(`A ${fruits[fruit]} has ${vowels} vowel and ${consonants} consonants`)
    } 
    
    else if (consonants < 2) {
        console.log(`A ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonant`)
    }
    else {
        console.log(`A ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`)
    }
} 
 


 