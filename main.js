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

// When the user press "Enter" they are redirected to product page
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const query = searchInput.value.trim();
      if (query) {
        // Redirect to productpage.html with query as URL param
        window.location.href = `views/productpage.html?search=${encodeURIComponent(
          query
        )}`;
      } else {
        // Redirect anyway if empty
        window.location.href = "views/productpage.html";
      }
    });
  }
});
