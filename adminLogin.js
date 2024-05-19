document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = event.target.username.value.trim(); 
    const password = event.target.password.value.trim();

    if (username === "" || password === "") {
        alert('Please enter both username and password');
        return; 
    }

    const adminUsername = 'admin';
    const adminPassword = 'admin123';
    
    if (username === adminUsername && password === adminPassword) {
        alert('Login successful');

        window.location.href = 'admin.html';
    } else {
 
        event.target.password.value = "";

        alert('Invalid username or password');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (name === "" || email === "" || password === "") {
        alert('Please fill in all fields');
        return;
    }
   
    alert('Signup successful. Your account is pending admin approval.');
    
    event.target.reset();
});
