"use strict";

const sr = scrollReveal({
    origin:'top',
    distance: '85px',
    duration: 2500,
    reset:true
});

sr.reveal('.home-text', {delay: 300});
sr.reveal('.home-img', {delay: 400});
sr.reveal('.container', {delay: 400});

sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay: 300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', {delay: 300});

sr.reveal('.review-content, .contact', {delay: 300});



 






