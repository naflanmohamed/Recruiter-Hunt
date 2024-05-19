document.getElementById('post-job-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const job = {
        title: event.target['job-title'].value,
        salary: event.target['job-salary'].value,
        description: event.target['job-description'].value,
        experience: event.target['candidate-experience'].value,
        incentive: event.target['job-incentive'].value,
    };

    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));

    alert('Job posted successfully');
    event.target.reset();
});
