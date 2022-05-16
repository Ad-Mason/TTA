
function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


// function submit_form(){
//     let Name = document.getElementById("Name");
//     let Email = document.getElementById("Email");
//     let Message = document.getElementById("Message");
// }


function submit_blog(){
    let Name = document.getElementById("Name");
    let Message = document.getElementById("Message");
}

function post_to_blog(){
const title = document.createElement("t");
const author = document.createElement("a");
const para = document.createElement("p");

//append to the dom
const content = document.querySelector(".content");
content.appendChild(author)

//appened to the body
title.innerText = "Blog title";
author.innerText = "Author name";
para.innerText = "This is a paragraph";
document.body.appendChild(para);


} 