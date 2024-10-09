// Function to clear the form fields
function clearForm() {
    document.getElementById('passwordForm').reset();
}

// Function to handle cancel button click
function cancelForm() {
    // Redirect to another page or simply alert
    alert('Cancel clicked. Redirecting...');
    // You can redirect if necessary: window.location.href = 'home.html';
}

// Form submit handler (optional, for validation)
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        alert('Password changed successfully!');
        // You can now proceed with further actions like form submission
    } else {
        alert('Passwords do not match. Please try again.');
    }
});
