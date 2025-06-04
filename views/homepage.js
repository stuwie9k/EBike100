// homepage.js

document.addEventListener("DOMContentLoaded", () => {
  // Handle CTA button click
  const button = document.querySelector(".cta-button");
  if (button) {
    button.addEventListener("click", () => {
      alert("Redirecting to new arrivals...");
      // window.location.href = "/new-arrivals";
    });
  }

  // Handle mobile menu toggle
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".menu-toggle");

  if (navbar && toggle) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  }
});
