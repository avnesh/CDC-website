function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading partial:', filePath, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header", "partials/header.html");
    loadHTML("footer", "partials/footer.html");

    // Mobile Menu Toggle (Event Delegation)
    document.body.addEventListener('click', function (event) {
        if (event.target.closest('.mobile-menu-btn')) {
            const navLinks = document.querySelector('.nav-links');
            const icon = document.querySelector('.mobile-menu-btn i');

            navLinks.classList.toggle('active');

            // Toggle Icon
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ri-menu-3-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-3-line');
            }
        }
    });

    // Scroll Animations & Scroll To Top
    setupScrollEffects();
});


function setupScrollEffects() {
    // 1. Auto-add .reveal class to key elements if they don't have it
    const animatedSelectors = ['.section-title', '.card', '.hero h1', '.hero p', '.section p', '.btn'];
    animatedSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
        });
    });

    // 2. Intersection Observer for Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    // Observe all .reveal elements (existing + newly added)
    // We wait a tick to ensure dynamic content might be loaded, distinct from simple DOMContentLoaded
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);


    // 3. Scroll to Top Visibility (Retry logic as footer is async)
    const checkScrollBtn = setInterval(() => {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            clearInterval(checkScrollBtn);
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });
        }
    }, 500); // Check every 500ms
}
