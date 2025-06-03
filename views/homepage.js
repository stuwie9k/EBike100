// homepage.js

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".cta-button");
  button.addEventListener("click", () => {
    alert("Redirecting to new arrivals...");
    // window.location.href = "/new-arrivals"; // Uncomment for real nav
  });
});
