/* Toggle between adding and removing the "responsive" class to nav-keys when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-keys");
    if (x.className === "nav-keys") {
        x.className += " responsive";
    } else {
        x.className = "nav-keys";
    }
}