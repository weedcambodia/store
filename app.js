// Simple JavaScript for front-end validation and navigation

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store the credentials in localStorage for demo purposes
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve the credentials from localStorage for demo purposes
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logout successful!');
    window.location.href = 'index.html';
}

function forgotPassword() {
    const email = document.getElementById('email').value;
    alert('A password reset link has been sent to ' + email);
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && document.getElementById('welcomeUser')) {
        document.getElementById('welcomeUser').textContent = loggedInUser;
    }
});
