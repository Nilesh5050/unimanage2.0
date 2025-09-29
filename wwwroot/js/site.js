document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Mobile menu functionality
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    openMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scrolling for navigation links
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

    // Header scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Portfolio filter
    function filterPortfolio(category) {
        const items = document.querySelectorAll('.portfolio-item');
        const buttons = document.querySelectorAll('.inline-flex button');

        // Update active button
        buttons.forEach(btn => {
            btn.classList.remove('tab-active');
            btn.classList.add('text-gray-600');
        });
        event.target.classList.add('tab-active');
        event.target.classList.remove('text-gray-600');

        // Filter items
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Pricing toggle
    function switchPricing(period) {
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        const buttons = document.querySelectorAll('.inline-flex button');

        // Update active button
        buttons.forEach(btn => {
            btn.classList.remove('tab-active');
            btn.classList.add('text-gray-600');
        });
        event.target.classList.add('tab-active');
        event.target.classList.remove('text-gray-600');

        // Toggle prices
        if (period === 'monthly') {
            monthlyPrices.forEach(price => price.classList.remove('hidden'));
            annualPrices.forEach(price => price.classList.add('hidden'));
        } else {
            monthlyPrices.forEach(price => price.classList.add('hidden'));
            annualPrices.forEach(price => price.classList.remove('hidden'));
        }
    }

    // Make functions global
    window.filterPortfolio = filterPortfolio;
    window.switchPricing = switchPricing;
});