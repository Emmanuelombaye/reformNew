// Healthio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Form Submission
    const contactForm = document.getElementById('consultation-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const formData = new FormData(contactForm);
            const isValid = Array.from(formData.entries()).every(([key, value]) => {
                if (key === 'program') return value !== '';
                return value.trim() !== '';
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Booking...';
            
            setTimeout(() => {
                alert('Thank you! Your consultation has been booked. We\'ll contact you within 24 hours.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitBtn = newsletterForm.querySelector('button');
            
            if (!emailInput.value || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }
    
    // Service Card Animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Team Member Card Animation
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const social = this.querySelector('.member-social');
            if (social) {
                social.style.transform = 'translateY(0)';
            }
        });
        
        member.addEventListener('mouseleave', function() {
            const social = this.querySelector('.member-social');
            if (social) {
                social.style.transform = 'translateY(100%)';
            }
        });
    });
    
    // Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stats-item h3, .stat-item h3');
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const interval = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, interval);
    }
    
    // Initialize counters when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = parseInt(target.textContent);
                
                if (!isNaN(value)) {
                    target.textContent = '0';
                    animateCounter(target, value);
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        if (!stat.textContent.includes('/')) { // Don't animate ratings like 4.9/5
            observer.observe(stat);
        }
    });
    
    // Parallax Effect for Hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            const heroImage = hero.querySelector('.hero-image');
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });
    
    // Initialize floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Testimonial Slider (Simple Auto-Slide)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0) {
        setInterval(() => {
            testimonialCards.forEach(card => {
                card.style.opacity = '0.5';
                card.style.transform = 'scale(0.95)';
            });
            
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            testimonialCards[currentTestimonial].style.opacity = '1';
            testimonialCards[currentTestimonial].style.transform = 'scale(1)';
            
        }, 5000);
    }
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Add loading state
        if (!img.complete) {
            img.classList.add('loading');
        } else {
            img.classList.add('loaded');
        }
    });
    
    // Add CSS for image loading states
    const style = document.createElement('style');
    style.textContent = `
        img.loading {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        img.loaded {
            opacity: 1;
            animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// Initialize when page is fully loaded
window.addEventListener('load', function() {
    // Remove any remaining loading states
    document.querySelectorAll('img.loading').forEach(img => {
        img.classList.remove('loading');
        img.classList.add('loaded');
    });
    
    // Add loaded class to body for transition effects
    document.body.classList.add('loaded');
});