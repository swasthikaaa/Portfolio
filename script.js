/* Wait for DOM to load */
document.addEventListener("DOMContentLoaded", function() {
    /* -------------------------------------
       MOBILE NAVBAR TOGGLE
    -------------------------------------- */
    const toggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
            toggle.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                toggle.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!e.target.closest("#navbar")) {
                navLinks.classList.remove("active");
                toggle.classList.remove("active");
            }
        });
    }

    /* -------------------------------------
       SMOOTH SCROLL
    -------------------------------------- */
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
