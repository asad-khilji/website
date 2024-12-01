function checkCredentials() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const correctUsername = "admin"; // Change to your desired username
    const correctPassword = "yourpassword"; // Change to your desired password

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "dashboard.html"; // Redirect to your main page
    } else {
        document.getElementById("error").innerText = "Incorrect username or password!";
    }
}

 