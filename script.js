// script.js - Touseef Ahmed Portfolio

document.getElementById('back-to-top').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('contact-form').onsubmit = function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
};

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add medical theme class to body
    document.body.classList.add('medical-themed');
    
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll
    function handleScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check on initial load
    handleScroll();
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate medical icons randomly
    const animateIcons = () => {
        const icons = document.querySelectorAll('.animation-container div');
        icons.forEach(icon => {
            const randomX = Math.floor(Math.random() * 20) - 10;
            const randomY = Math.floor(Math.random() * 20) - 10;
            const randomRotate = Math.floor(Math.random() * 10) - 5;
            
            setTimeout(() => {
                icon.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
                setTimeout(() => {
                    icon.style.transform = '';
                }, 1000);
            }, Math.random() * 5000);
        });
        
        setTimeout(animateIcons, 5000);
    };
    
    // Start icon animations
    animateIcons();
});
