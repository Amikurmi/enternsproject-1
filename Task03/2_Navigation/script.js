const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the 'show' class on the nav links when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
