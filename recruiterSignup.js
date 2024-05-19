document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    alert('Signup successful. Your account is pending admin approval.');
    
    localStorage.setItem(email, JSON.stringify({ name, email, password, approved: false }));
    event.target.reset();
});
