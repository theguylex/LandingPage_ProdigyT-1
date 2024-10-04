// Select the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to change navbar style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 590) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
