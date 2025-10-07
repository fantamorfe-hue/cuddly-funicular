// Theme toggle functionality
const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeButton.textContent = isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Alert button functionality
const alertButton = document.getElementById('showAlert');
alertButton.addEventListener('click', () => {
    alert('Hello! Thanks for clicking!');
});

// Navigation active state
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});
