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
    const cartIconMobile = document.getElementById("cart-icon-mobile");
    const cartIconDesktop = document.getElementById("cart-icon-desktop");

    if (cartIconMobile) {
      cartIconMobile.src = "../assets/images/ShoppingCart_Item.png";
    }
    if (cartIconDesktop) {
      cartIconDesktop.src = "../assets/images/ShoppingCart_Item.png";
    }
  }
});
