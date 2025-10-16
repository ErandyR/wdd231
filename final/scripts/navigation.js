
const navbtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-bar');

navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    navLinks.classList.toggle('show');
});