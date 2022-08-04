const send = document.querySelector(".btn");
const error = document.querySelector(".error");
const errorIcon = document.querySelector(".bx");
const inputSpace = document.getElementById("email");
const succes = document.querySelector(".succes");
const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formSub = document.getElementById("formSub");
formSub.addEventListener("click", function(e) {
    e.preventDefault();
});


send.addEventListener("click", function () {   
    
    if (inputSpace.value.length === 0 || !inputSpace.value.match(validation)) {
        error.style.display = "inline";
        errorIcon.style.display = "inline";
        error.textContent = "Please provide a valid email address";
        return timeoutFunc;
        
        
         
    } else {
        succes.style.display = "inline";
        succes.textContent = "Thank you for subscribing to our newsletter!";
        return timeoutFunc;
    }
    
});


const time = setInterval(() => {
  error.style.display = "none";
  errorIcon.style.display = "none";
}, 3000);






