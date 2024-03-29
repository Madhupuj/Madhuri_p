// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let navLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
