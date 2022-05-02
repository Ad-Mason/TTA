let userName ="Roobz"


if (userName.length > 0) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello!");
}

let userQuestion ="Will England win the World Cup"


//display question with user name if entered or request a question with username if entered 

if (userQuestion.length > 0 && userName.length > 0) { 
    console.log(`${userName} asks: ${userQuestion}?`);
} else if (userQuestion.length > 0 && userName.length < 1) {
    console.log(`${userQuestion}?`);
} else if (userQuestion.length > 1 && userName.length > 0) {
    console.log(`${userName}, Please enter a question`);
} else {
       console.log("Please ask a question");
   } 


let randomNumber = Math.floor(Math.random() * 7);


let eightBall = ""

//create eightball outputs

switch (randomNumber) {
  case 0:
    eightBall = 'Most definitely'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
   eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}



console.log(`The Magic 8 Ball answered: ${eightBall}`);



