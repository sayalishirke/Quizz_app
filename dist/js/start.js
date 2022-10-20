function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    //Storing name of player
    sessionStorage.setItem("username", name);
    
    //navigating to next page 
    location.href = "quiz.html";
  }