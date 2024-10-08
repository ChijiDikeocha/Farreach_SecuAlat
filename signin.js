/* Toggle between adding and removing the "responsive" class to nav-keys when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-keys");
    if (x.className === "nav-keys") {
        x.className += " responsive";
    } else {
        x.className = "nav-keys";
    }
}


var myInput = document.getElementById("password-input");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("numbers");
var symbol = document.getElementById("symbols");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    }

  // Validate symbols
    var symbols = /[?=.*\d)(?=.*[@$!%*?&]/g;
    if(myInput.value.match(symbols)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
    } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
    }

  // Validate numbers
var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    }

  // Validate length
    if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    }
}


function myFun() {
    var x = document.getElementById("password-input");
    if (x.type === "password-input") {
        x.type = "text";
    } else {
        x.type = "password-input";
    }
}

//  ** form validation starts here**

const form = document.getElementById('form')
const yourname_input = document.getElementById('yourname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []

  if(yourname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(yourname_input.value, email_input.value, password_input.value, repeat_password_input.value)
  }
  else{
    // If we don't have a firstname input then we are in the login
    errors = getSigninFormErrors(email_input.value, password_input.value)
  }

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }
})

// function getSignupFormErrors(yourname, email, password, repeatPassword){
//   let errors = []

//   if(yourname === '' || yourname == null){
//     errors.push('Your name is required')
//     yourname_input.parentElement.classList.add('incorrect')
//   }
//   if(email === '' || email == null){
//     errors.push('Email is required')
//     email_input.parentElement.classList.add('incorrect')
//   }
//   if(password === '' || password == null){
//     errors.push('Password is required')
//     password_input.parentElement.classList.add('incorrect')
//   }
//   if(password.length < 8){
//     errors.push('Password must have at least 8 characters')
//     password_input.parentElement.classList.add('incorrect')
//   }
//   if(password !== repeatPassword){
//     errors.push('Password does not match repeated password')
//     password_input.parentElement.classList.add('incorrect')
//     repeat_password_input.parentElement.classList.add('incorrect')
//   }

//   return errors;
// }

function getSigninFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [yourname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})











//  ** form validation ends here**

// const form = document.querySelector("form"),
//     emailField = form.querySelector(".email-field"),
//     emailInput = emailField.querySelector(".email"),
//     passField = form.querySelector(".create-password"),
//     passInput = passField.querySelector(".password"),
//     cPassField = form.querySelector(".confirm-password"),
//     cPassInput = cPassField.querySelector(".cPassword");

// // Email Validtion
// function checkEmail() {
//   const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!emailInput.value.match(emaiPattern)) {
//     return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
//   }
//   emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
// }

// // Hide and show password
// const eyeIcons = document.querySelectorAll(".show-hide");

// eyeIcons.forEach((eyeIcon) => {
//   eyeIcon.addEventListener("click", () => {
//     const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
//     if (pInput.type === "password") {
//       eyeIcon.classList.replace("bx-hide", "bx-show");
//       return (pInput.type = "text");
//     }
//     eyeIcon.classList.replace("bx-show", "bx-hide");
//     pInput.type = "password";
//   });
// });

// // Password Validation
// function createPass() {
//   const passPattern =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   if (!passInput.value.match(passPattern)) {
//     return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
//   }
//   passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
// }

// // Confirm Password Validtion
// function confirmPass() {
//     if (passInput.value !== cPassInput.value || cPassInput.value === "") {
//     return cPassField.classList.add("invalid");
//     }
//     cPassField.classList.remove("invalid");
// }

// // Calling Funtion on Form Sumbit
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //preventing form submitting
//     checkEmail();
//     createPass();
//     confirmPass();

//   //calling function on key up
//   emailInput.addEventListener("keyup", checkEmail);
//   passInput.addEventListener("keyup", createPass);
//   cPassInput.addEventListener("keyup", confirmPass);

//   if (
//     !emailField.classList.contains("invalid") &&
//     !passField.classList.contains("invalid") &&
//     !cPassField.classList.contains("invalid")
//   ) {
//     location.href = form.getAttribute("action");
//   }
// });