// homepage.js

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".cta-button");
  button.addEventListener("click", () => {
    alert("Redirecting to new arrivals...");
    // window.location.href = "/new-arrivals"; // Uncomment for real nav
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
});
