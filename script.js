// script.js - Touseef Ahmed Portfolio

document.getElementById('back-to-top').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('contact-form').onsubmit = function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
};
