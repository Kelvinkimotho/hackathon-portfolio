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

function autoScrollTestimonials() {
    testimonialsWrapper.scrollBy({
        left: 300,  // Scroll by 300px each time
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Scroll every 3 seconds
setInterval(autoScrollTestimonials, 3000);

// Auto-scroll Blog Section
const blogWrapper = document.querySelector(".blog-cards-wrapper");

function autoScrollBlog() {
    blogWrapper.scrollBy({
        left: 300,  // Scroll by 300px each time
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Scroll every 3 seconds for blogs
setInterval(autoScrollBlog, 3000);

// Auto-scroll Careers Section
const careersWrapper = document.querySelector(".careers-cards-wrapper");

function autoScrollCareers() {
    careersWrapper.scrollBy({
        left: 300,  // Scroll by 300px each time
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Scroll every 3 seconds for careers
setInterval(autoScrollCareers, 3000);

// Auto-scroll Partners Section
const partnersWrapper = document.querySelector(".partners-cards-wrapper");

function autoScrollPartners() {
    partnersWrapper.scrollBy({
        left: 300,  // Scroll by 300px each time
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Scroll every 3 seconds for partners
setInterval(autoScrollPartners, 3000);
