const app = () => {
    navSlide();
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll(
        '.main-header .navbar .nav-links .nav-item'
    );
    const toggle = document.querySelector('.toggle')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
        navLinks.forEach((link, idx) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    idx / 7 + 0.3
                }s`;
            }
        });
    });
};

app();
