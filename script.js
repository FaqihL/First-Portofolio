const links = document.querySelectorAll('.nav-links a');


links.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
const offset = 80; // space from top
const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
window.scrollTo({ top: y, behavior: 'smooth' });
});
});