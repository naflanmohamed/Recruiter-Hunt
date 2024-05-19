document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('job-list');
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Salary:</strong> ${job.salary} PKR</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Experience:</strong> ${job.experience} years</p>
            <p><strong>Incentive:</strong> ${job.incentive} PKR</p>
        `;

        if (isRecruiterAuthenticated()) {
            const applyButton = document.createElement('button');
            applyButton.textContent = 'Apply for Job';
            applyButton.type = 'button';
            applyButton.addEventListener('click', function() {
                if (isRecruiterAuthenticated()) {
                    applyForJob(job.title);
                } else {
                    alert('Please log in as a recruiter to apply for the job.');

                    window.location.href = 'login.html';
                }
            });
            jobElement.appendChild(applyButton);
        }

        jobList.appendChild(jobElement);
    });
});

function isRecruiterAuthenticated() {
 
    return true;
}

function applyForJob(jobTitle) {
    alert(`Applied for job: ${jobTitle}`);
}
