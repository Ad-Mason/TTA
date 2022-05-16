
  function submitBlog(){
    
    var title = document.createElement("h2");
    var author = document.createElement("h2");
    var post = document.createElement("p");
    title.innerText = document.getElementById("Title").value;
    author.innerText = document.getElementById("Author").value;
    post.innerText = document.getElementById("Post").value;
    document.getElementById("myBlog").appendChild(post);
    document.getElementById("myBlog").appendChild(post);
  }


function toggle() {
    var elementB = document.body;
    elementB.classList.toggle("light-mode");
    var elementM = document.main;
    elementM.classList.toggle("light-mode");
  }



  