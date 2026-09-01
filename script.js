const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});



const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});



const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thanks for contacting me! Your message has been received."
    );

    contactForm.reset();
});




const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});



const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} Collins Mathayo. All rights reserved.`;
}







