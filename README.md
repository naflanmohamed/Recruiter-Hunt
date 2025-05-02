# Recruiter Hunt

[🔗 Live Demo](https://naflanmohamed.github.io/Recruiter-Hunt/)

Welcome to **Recruiter Hunt**, a front-end prototype for a recruitment platform where recruiters can post jobs and candidates can view and apply for positions. This repository contains all the source code, assets, and documentation for the Recruiter Hunt project.

## Table of Contents

- [About This Project](#about-this-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About This Project

Recruiter Hunt is a simple, responsive web application built with vanilla HTML, CSS, and JavaScript. It simulates a basic recruitment workflow, allowing recruiters to log in, post new job listings, and view candidate applications; and enables candidates to browse available jobs after signing up.

## Features

- **Recruiter Login**: Secure login page for recruiters (`admin-login.html`).
- **Dashboard**: Recruiters can create, edit, and delete job postings via `admin.html`.
- **Job Posting Form**: Post new job listings with title, description, and requirements (`post-job.html`).
- **User Signup & Login**: Candidates can register (`signup.html`) and log in (`login.html`) to view jobs.
- **Browse Jobs**: View a list of available job postings on `view-jobs.html`.
- **Client-Side Validation**: Basic form validation to ensure data integrity.

## Technology Stack

- **HTML5**: Semantic page structure and forms.
- **CSS3**: Layout and styling using Flexbox, custom styling in `styles.css` and `styles/`.
- **JavaScript (ES6)**: Dynamic DOM manipulation and event handling in individual scripts (`admin.js`, `login.js`, `postJob.js`, etc.).

## Repository Structure

```plaintext
Recruiter-Hunt/
├── images/             # Icons, logos, and screenshot assets
├── styles/             # Additional CSS files for separate pages
│   └── styles.css      # Main stylesheet
├── admin-login.html    # Recruiter login page
├── admin.html          # Recruiter dashboard for managing postings
├── admin.js            # Dashboard logic
├── adminLogin.js       # Recruiter login handling
├── index.html          # Landing page (redirects to login)
├── login.html          # Candidate login page
├── login.js            # Candidate login logic
├── post-job.html       # Job posting form for recruiters
├── postJob.js          # Logic for creating new job entries
├── recruiterSignup.js  # Candidate signup logic
├── signup.html         # Candidate registration page
├── view-jobs.html      # Job listing page for candidates
├── viewJob.js          # Logic to fetch and display jobs
└── README.md           # Project documentation
```

## Getting Started

To run Recruiter Hunt locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/naflanmohamed/Recruiter-Hunt.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd Recruiter-Hunt
   ```
3. **Open `index.html`** in your web browser. It will redirect you to the appropriate login or signup page.

## Usage

- **For Recruiters**:
  1. Go to `admin-login.html` and enter your credentials.
  2. Once logged in, use the dashboard to post new jobs or manage existing ones.
- **For Candidates**:
  1. Go to `signup.html` to create an account.
  2. Log in via `login.html` to access the job listings on `view-jobs.html`.

## Customization

- **Styling**: Modify `styles.css` or add new stylesheets under `styles/` to change the look and feel.
- **Data Handling**: Integrate a backend service (e.g., Node.js with Express, Firebase) to persist user and job data instead of client-side storage.
- **Features**: Add search and filter functionality, file uploads for resumes, and email notifications for new postings.

## Deployment

This project can be hosted on any static-file hosting service:

- **GitHub Pages**: Push to `main`, enable GitHub Pages in settings.
- **Netlify**: Drag and drop the folder or connect the GitHub repo.
- **Vercel**: Import the repo and deploy with default options.

## Contact

Have questions or feedback? Reach out:

- **LinkedIn**: [linkedin.com/in/naflanmohamed](https://www.linkedin.com/in/naflan-mohamed)
- **GitHub**:   [github.com/naflanmohamed](https://github.com/naflanmohamed)
  
