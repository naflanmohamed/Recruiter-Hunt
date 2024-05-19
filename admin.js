document.addEventListener('DOMContentLoaded', function() {
    const pendingAccountsList = document.getElementById('pending-accounts-list');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const recruiter = JSON.parse(localStorage.getItem(key));

        if (!recruiter.approved) {
            const accountElement = document.createElement('li');
            accountElement.innerHTML = `
                <p><strong>Name:</strong> ${recruiter.name}</p>
                <p><strong>Email:</strong> ${recruiter.email}</p>
                <button onclick="approveAccount('${recruiter.email}')">Approve</button>
            `;
            pendingAccountsList.appendChild(accountElement);
        }
    }
});

function approveAccount(email) {
    const recruiter = JSON.parse(localStorage.getItem(email));
    recruiter.approved = true;
    localStorage.setItem(email, JSON.stringify(recruiter));
    alert(`Account approved for ${recruiter.name}`);
    window.location.reload();
}
