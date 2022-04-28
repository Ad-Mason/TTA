let userName ="Roobz"

if (userName.length > 0) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello!");
}

let userQuestion ="Who's going to win the World Cup"

if (userQuestion.length > 0 && userName.length > 0) {
    console.log(`${userName} asks, ${userQuestion}?`);
} else if (userQuestion.length > 0 && userName.length < 1) {
    console.log(`${userQuestion}?`);
} else if (userQuestion.length > 1 && userName.length > 0) {
    console.log(`${userName}, Please enter a question`);
} else {
       console.log("Please ask a question");
   } 

