document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;

    const recruiter = JSON.parse(localStorage.getItem(email));

    if (recruiter && recruiter.password === password) {
        if (recruiter.approved) {
            alert('Login successful');
            window.location.href = 'post-job.html';
        } else {
            alert('Your account is still pending admin approval.');
        }
    } else {
        alert('Invalid email or password');
    }
});
