(function loop(i) {
  if (i < 5) {
    console.log("Messsage");
    loop(i + 1);
  }
}(0));

function Features(name, hair, eyeColour, age) {
  console.log(`The ${name} is ${age} years old and has ${hair} hair with ${eyeColour} eyes`);
}

Features("Queen", "grey", "blue", 95)


function stopLoop() {
  do {
   value = prompt("Enter stop to exit");
 } while (value != "stop");
 }
 
 stopLoop()
