
function submitBlog(){

  //check title is entered or alert

  var searchtitle = document.getElementById("Title").value;
  if(searchtitle=='')
  {
      alert('Enter the title');
      return false;
  }

  //check author is entered or alert

  var searchauthor = document.getElementById("Author").value;
  if(searchauthor=='')
  {
      alert('Enter the author');
      return false;
  }

  //check message is entered or alert

  var searchpost = document.getElementById("Post").value;
  if(searchpost=='')
  {
      alert('Enter message');
      return false;
  }
  
  //create elements to uploat to blog 

  var title = document.createElement("h2");
  var author = document.createElement("h4");
  var post = document.createElement("p");
  title.innerText = document.getElementById("Title").value;
  author.innerText = document.getElementById("Author").value;
  post.innerText = document.getElementById("Post").value;
  document.getElementById("myBlog").appendChild(title);
  document.getElementById("myBlog").appendChild(author);
  document.getElementById("myBlog").appendChild(post);
  }


//toggle diplay 

function toggle() {
    var elementB = document.body;
    elementB.classList.toggle("light-mode");
    var elementM = document.main;
    elementM.classList.toggle("light-mode");
  }



  