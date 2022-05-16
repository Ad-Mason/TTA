function change_text(){
  let element = document.getElementById("paragraph_1");

  if (element.style.color == "red") {
    element.style.color = "black";
  } else {
    element.style.color = "red";
  }
}


// Create element:
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";

// Append to another element:
document.getElementById("myBlog").appendChild(para);



function change_background(){
  if (document.body.style.backgroundColor == "purple") {
    document.body.style.backgroundColor = "#FFFFFF";
  } else {
    document.body.style.backgroundColor = "purple"
  }
}
function submit_form(){
  let fname = document.getElementById("fname");
  let surname = document.getElementById("sname");
  let email = document.getElementById("email");

  let options = document.getElementsByName("collection_1");
  for (var i = 0; i < options.length; i++){
    if (options[i].checked){
      window.alert(`You have selected ${options[i].value}`);
      break;
    }
    switch(options[i].value){
      case "SMS":
        //do something
        break;
    }
  }
}
