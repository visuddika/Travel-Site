document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const menuBar = document.getElementById('menu-bar');
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.querySelector('.search-bar-container');
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const formClose = document.getElementById('form-close');
    const navbar = document.querySelector('.navbar');
    const videoBtn = document.querySelectorAll('.vid-btn');
    const videoSlider = document.querySelector('#video-slider');

    // Toggle navbar
    if (menuBar && navbar) {
        menuBar.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBar.classList.toggle('fa-times');
            searchBar?.classList.remove('active');
            loginForm?.classList.remove('active');
        });
    }

    // Toggle search bar
    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            navbar?.classList.remove('active');
            menuBar?.classList.remove('fa-times');
            loginForm?.classList.remove('active');
        });
    }

    // Open login form
    if (loginBtn && loginForm) {
        loginBtn.addEventListener('click', () => {
            loginForm.classList.add('active');
            searchBar?.classList.remove('active');
            navbar?.classList.remove('active');
            menuBar?.classList.remove('fa-times');
        });
    }

    // Close login form
    if (formClose && loginForm) {
        formClose.addEventListener('click', () => {
            loginForm.classList.remove('active');
        });
    }

    // Close login form when clicking outside
    if (loginForm) {
        window.addEventListener('click', (e) => {
            if (!loginForm.contains(e.target) && !loginBtn.contains(e.target)) {
                loginForm.classList.remove('active');
            }
        });
    }

    // Video button functionality
    if (videoBtn.length > 0 && videoSlider) {
        videoBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const activeBtn = document.querySelector('.controls .active');
                if (activeBtn) activeBtn.classList.remove('active'); // Remove 'active' class from the current button
                btn.classList.add('active'); // Add 'active' class to the clicked button

                const src = btn.getAttribute('data-src');
                if (src) videoSlider.src = src; // Update video source
            });
        });
    }
});


var swiper = new Swiper(".Review-slider", {
    spaseBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpointts:{
        640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:1,
    },

    1024:{
        slidesPerView:1,
    },


    },
});
const container = document.querySelector('.logo-wrapper-container');
const scrollAmount = 200; // Adjust scroll distance as needed

document.querySelector('.scroll-left').addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.querySelector('.scroll-right').addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
