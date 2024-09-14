/* Toggle between adding and removing the "responsive" class to nav-keys when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-keys");
    if (x.className === "nav-keys") {
        x.className += " responsive";
    } else {
        x.className = "nav-keys";
    }
}



// var myInput = document.getElementById("message");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = myFun() {
//     document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = myfun() {
//     document.getElementById("message").style.display = "none";
// }