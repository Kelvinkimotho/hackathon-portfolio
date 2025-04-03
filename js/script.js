// Toggle Menu for Mobile View
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.querySelector(".team-container");
    const prevBtn = document.querySelector(".prev-team");
    const nextBtn = document.querySelector(".next-team");

    nextBtn.addEventListener("click", () => {
        teamContainer.scrollBy({ left: 250, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        teamContainer.scrollBy({ left: -250, behavior: "smooth" });
    });
});

// Auto-scroll Testimonials Section
const testimonialsWrapper = document.querySelector(".testimonials-wrapper");

function autoScroll() {
    testimonialsWrapper.scrollBy({
        left: 300,  // Scroll by 300px each time
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Scroll every 3 seconds
setInterval(autoScroll, 3000);
