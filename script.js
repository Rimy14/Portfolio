// Toggle hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Scroll-based fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in class to all sections except profile
    const sections = document.querySelectorAll("section:not(#profile)");
    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    // Add fade-in to individual skill boxes and project cards
    const cards = document.querySelectorAll(".skill-box, .project-card, .details-container, .contact-section form");
    cards.forEach((card) => {
        card.classList.add("fade-in");
    });

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Active nav link highlighting on scroll
    const navLinks = document.querySelectorAll(".nav-links a");
    const sectionElements = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sectionElements.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.style.color = "";
            if (link.getAttribute("href") === `#${current}`) {
                link.style.color = "#667eea";
            }
        });
    });
});
