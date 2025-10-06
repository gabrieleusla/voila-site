// ========================================
// SILLAGE - Interactive Features
// ========================================

// Smooth scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to all major sections
    const sections = document.querySelectorAll('.section, .benefit-card, .step, .testimonial-card');
    sections.forEach(section => {
        section.classList.add('fade-in');
        fadeInObserver.observe(section);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero section
    let lastScrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (hero && scrollY < window.innerHeight) {
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
            hero.style.opacity = 1 - (scrollY / window.innerHeight);
        }
        lastScrollY = scrollY;
    });

    // Add animation delay to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add animation delay to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Track CTA clicks for analytics (placeholder)
    const trackCTAClick = (buttonName) => {
        console.log(`CTA clicked: ${buttonName}`);
        // Here you can add Google Analytics or other tracking code
        // Example: gtag('event', 'cta_click', { 'button_name': buttonName });
    };

    // Add tracking to all CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            trackCTAClick(buttonText);
        });
    });

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #D4AF37, #E8C87C);
            z-index: 9999;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    };

    createScrollProgress();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    const scrolled = window.scrollY;
    
    // Add shadow to header if exists
    const header = document.querySelector('header');
    if (header) {
        if (scrolled > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// WhatsApp number - IMPORTANT: Replace with actual number
const WHATSAPP_NUMBER = '5541996832716'; // Format: Country code + DDD + Number (no spaces or special chars)

// Update all WhatsApp links with the correct number
document.addEventListener('DOMContentLoaded', () => {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        const updatedHref = currentHref.replace(/5541999999999/g, WHATSAPP_NUMBER);
        link.setAttribute('href', updatedHref);
    });
});
