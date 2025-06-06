// Handle mobile menu toggle
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".menu-toggle");

if (navbar && toggle) {
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const cartHasItems = localStorage.getItem("cartHasItems") === "true";

  if (cartHasItems) {
    // Check what folder the HTML file is in
    const isInViews = window.location.pathname.includes("/views/");

    // Choose the correct image path
    const imagePath = isInViews
      ? "../assets/images/ShoppingCart_Item.png"
      : "assets/images/ShoppingCart_Item.png";

    // Get the icon elements
    const cartIconMobile = document.getElementById("cart-icon-mobile");
    const cartIconDesktop = document.getElementById("cart-icon-desktop");

    // Set correct image path
    if (cartIconMobile) cartIconMobile.src = imagePath;
    if (cartIconDesktop) cartIconDesktop.src = imagePath;
  }
});
