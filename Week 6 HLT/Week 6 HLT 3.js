


//my fruits array 

var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"]
var lettersFound = []
var letterCount = []
//loop through my fruits array to find the number of vowels and consonants 

for (let fruit in fruits) {

    var vowels = 0
    var consonants = 0


    for (var i = 0; i < fruits[fruit].length; i++) {
        var currentLetter = fruits[fruit][i];

        if (currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u") {
            vowels++
        } else {
            consonants++
        }
        var letterIdx = lettersFound.findIndex(x=> x ==currentLetter)
        if (lettersFound.find(element => element == currentLetter)) {
        letterCount[letterIdx]++;
        } else {
            lettersFound.push(currentLetter)
            letterCount.push(1);
        }


    }


    if (vowels < 2 && (fruits[fruit][0].toLowerCase() == "a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u")) {
        console.log(`An ${fruits[fruit]} has ${vowels} vowel and ${consonants} consonants`);
    }

    else if (consonants < 2 && (fruits[fruit][0].toLowerCase() == "a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u")) {
        console.log(`An ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonant`);
    }

    else if (fruits[fruit][0].toLowerCase() == "a" || fruits[fruit][0].toLowerCase() == "e" || fruits[fruit][0].toLowerCase() == "i" || fruits[fruit][0].toLowerCase() == "o" || fruits[fruit][0].toLowerCase() == "u") {
        console.log(`An ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`);
    }

    else if (vowels < 2) {
        console.log(`A ${fruits[fruit]} has ${vowels} vowel and ${consonants} consonants`);
    }

    else if (consonants < 2) {
        console.log(`A ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonant`);
    }
    else {
        console.log(`A ${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`);
    }

}


console.log("\n\nWe require")
var orders = ""
for (i = 0; i < lettersFound.length; i++) {

    orders += (`${letterCount[i]} ${lettersFound[i]}. `)
    if (lettersFound.length == i+1){
} else  orders += (`${letterCount[i]} ${lettersFound[i]}, `)
}

console.log(orders);