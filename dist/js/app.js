const app = () => {
    navSlide();
    arrowUp();
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll(
        '.main-header .navbar .nav-links .nav-item'
    );

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link, idx) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    idx / 7 + 0.3
                }s`;
            }
        });
    });
};

const arrowUp = () => {
    const arrowUp = document.querySelector('.arrow-up');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            arrowUp.style.display = 'block';
            arrowUp.addEventListener('click', () => {
                window.scrollTo(0, 0)
            });
        } else {
            arrowUp.style.display = 'none';
        }
    });
};

app();
