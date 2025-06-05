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
});
