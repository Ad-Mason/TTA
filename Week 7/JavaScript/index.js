
  function change_text(){
     let element = document.getElementById("paragragh_1");
     element.style.color == "red"
  }

  function change_background_color(){
    let element = document.getElementById("paragragh_2");
  }

  function change_font() {
    let element = document.getElementById("paragragh_3");

  }


  function submit_form(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");


    let options = getElementsByName("collection_1");
    for (var i =0; i < options.length; i++){
      if (options[i].checked){
        window.alert(`Selected ${options[i].value}`);
        break;
      }
      switch(options[i].value){
        case "1":
        window.alert(`${fname} your wage will be £4.81 per hour`)
        case "2":
        window.alert(`${fname} your wage will be £6.83 per hour`)
        case "3":
        window.alert(`${fname} your wage will be £9.18 per hour`)
        case "4":
        window.alert(`${fname} your wage will be £9.50 per hour`)
      }
    }
    window.alert(`Hello ${fname.value} ${lname.value} - Your email ${email.value}`);


  }

