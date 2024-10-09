/* Toggle between adding and removing the "responsive" class to nav-keys when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-keys");
    if (x.className === "nav-keys") {
        x.className += " responsive";
    } else {
        x.className = "nav-keys";
    }
}

function myFun() {
    var x = document.getElementById("password-input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
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
    errors = getLoginFormErrors(email_input.value, password_input.value)
}

    if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
}
})

function getSignupFormErrors(yourname, email, password, repeatPassword){
    let errors = []

    if(yourname === '' || yourname == null){
    errors.push('Your name is required')
    yourname_input.parentElement.classList.add('incorrect')
}
    if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
}
    if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
}
    if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
}
    if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
}

    return errors;
}

// function getLoginFormErrors(email, password){
//     let errors = []

// if(email === '' || email == null){
//     errors.push('Email is required')
//     email_input.parentElement.classList.add('incorrect')
// }
// if(password === '' || password == null){
//     errors.push('Password is required')
//     password_input.parentElement.classList.add('incorrect')
// }

// return errors;
// }

const allInputs = [yourname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
    }
})
})