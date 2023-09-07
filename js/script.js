(function () {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({duration: 0.5});
    tl.from('.learn__title', {opacity: 0, y: 60})
        .from('.learn__descr', {opacity: 0, y: 45})
        .fromTo('.learn__button', {opacity: 0, y: 30}, {opacity: 1, y: 0});

    gsap.from('.skills', {
        scrollTrigger:{
            trigger: '.wrapper-learn',
            markers: true,
            start: 'top top',
            scrub: true,
        },
        opacity: 0,
        y: 200,
    })
    gsap.from('.about', {
        scrollTrigger:{
            trigger: '.skills',
            markers: true,
            start: 'top top',
            scrub: true,
        },
        opacity: 0,
        y: 200,
    })
    gsap.from('.about__item', {
        scrollTrigger:{
            trigger: '.skills',
            markers: true,
            start: '60% top',
            scrub: true,
        },
        opacity: 0,
        scale: 0,
    })
    gsap.from('.pricing', {
        scrollTrigger:{
            trigger: '.about',
            markers: true,
            start: 'top top',
            scrub: true,
        },
        opacity: 0,
        y: 200,
    })
    gsap.from('.contact', {
        scrollTrigger:{
            trigger: '.pricing',
            markers: true,
            start: 'top top',
            scrub: true,
        },
        opacity: 0,
        y: 200,
    })
    gsap.from('.footer', {
        scrollTrigger:{
            trigger: '.pricing',
            markers: true,
            start: '30% top',
            scrub: true,
        },
        opacity: 0,
        y: 200,
    })



    //Burger menu
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
        document.body.classList.add('noscroll');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
        document.body.classList.remove('noscroll');
    });

    if (window.innerWidth < 970) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());