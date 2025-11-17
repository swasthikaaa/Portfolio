/* -------------------------------------
   CUSTOM CURSOR
-------------------------------------- */
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorOutline.style.left = e.clientX + "px";
    cursorOutline.style.top = e.clientY + "px";

    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
    setTimeout(() => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    }, 80);
});

/* -------------------------------------
   MOBILE NAVBAR TOGGLE
-------------------------------------- */
const toggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navLinks.style.display = navLinks.classList.contains("active")
        ? "flex"
        : "none";
});

/* -------------------------------------
   SMOOTH SCROLL
-------------------------------------- */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
