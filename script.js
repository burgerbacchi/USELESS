document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        alert('Login successful!'); // Replace with actual login logic
    } else {
        alert('Please fill in all fields.');
    }
});


//example of git hub 