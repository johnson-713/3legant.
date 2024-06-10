function signup() {
    var name = document.getElementById('name').value
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value

    console.log(name, username, email)

    localStorage.setItem("name", name)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email)

    window.location.href = "homepage.html"
}


//function add(a, b) {
// return a + b
//}
