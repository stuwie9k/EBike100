// Handle mobile menu toggle
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".menu-toggle");

if (navbar && toggle) {
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}
