const navbar = document.querySelector('.fixed .navbar');

window.addEventListener('scroll', () => {
    console.log('Scroll event detected!'); // Debug log
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        console.log('Added scrolled class');
    } else {
        navbar.classList.remove('scrolled');
        console.log('Removed scrolled class');
    }
});
