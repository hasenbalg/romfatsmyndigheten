// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Language Selector Toggle
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    
    if (langToggle) {
        // Set initial button text based on current language
        updateLangToggleText(langToggle);
        
        langToggle.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'nn' ? 'nb' : 'nn';
            
            // Update language
            document.documentElement.lang = newLang;
            
            // Update button text
            updateLangToggleText(langToggle);
            
            // Update language meta tag
            const langMeta = document.querySelector('meta[http-equiv="Content-Language"]');
            if (langMeta) {
                langMeta.content = newLang;
            }
            
            // Update og:locale meta tag
            const ogLocale = document.querySelector('meta[property="og:locale"]');
            if (ogLocale) {
                ogLocale.content = newLang + '_' + newLang.toUpperCase();
            }
            
            // Build the new URL with the correct language prefix
            const currentPath = window.location.pathname;
            const currentHash = window.location.hash;
            
            // Remove any existing language prefix and add the new one
            let newPath;
            if (currentPath.startsWith('/nn/') || currentPath.startsWith('/nb/')) {
                // Replace existing language prefix
                newPath = currentPath.replace(/^\/(nn|nb)\//, '/' + newLang + '/');
            } else if (currentPath === '/' || currentPath === '/nn/' || currentPath === '/nb/') {
                // Home page
                newPath = '/' + newLang;
            } else {
                // Other pages - add language prefix
                newPath = '/' + newLang + currentPath;
            }
            
            window.location.href = newPath + currentHash;
        });
    }
});

function updateLangToggleText(button) {
    const currentLang = document.documentElement.lang;
    button.textContent = currentLang === 'nn' ? 'Bokmål' : 'Nynorsk';
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});