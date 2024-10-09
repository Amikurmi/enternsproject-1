document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
        // Here you can add code to handle the login
    }
});

function clearForm() {
    document.getElementById("loginForm").reset();
}
