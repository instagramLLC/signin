// GLOBAL VARIABLE DECLARATIONS
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginButton = document.querySelector("#login-btn");
let showButton = document.querySelector("#show-btn");
let hideButton = document.querySelector("#hide-btn");

// LOGIN BUTTON ENABLE + DISABLE FUNCTION
loginButton.disabled = true;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);

function stateHandle() {
  if (username.value.length > 0 && password.value.length > 4 ) {
    loginButton.disabled = false; 
  } else {
    loginButton.disabled = true;
  }
}

function stateHandleUp() {
  if (password.value.length > 5 ) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

// PASSWORD SHOW/HIDE BUTTON SWITCH
function showPassword() {
  if (password.type === "password") {
    password.type = "text";
    showButton.style.display = "none";
    hideButton.style.visibility = "visible";
  } else {
    password.type = "password";
    hideButton.style.visibility = "hidden";
    showButton.style.display = "inline-block";
  }
}

hideButton.style.visibility = "hidden";
