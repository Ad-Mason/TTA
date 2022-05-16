
function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Create element:
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";

// Append to another element:
document.getElementById("myBlog").appendChild(para);


function post_to_blog(){
const title = document.createElement("t");
const author = document.createElement("a");
const post = document.createElement("p");

//append to the dom
const content = document.querySelector(".content");
content.appendChild(author)

//appened to the body
title.innerText = "Blog title";
author.innerText = "Author name";
post.innerText = "Blog Post";
para.innerText = "This is a paragraph";
document.body.appendChild(para);


} 