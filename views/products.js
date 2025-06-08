document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-item h3").forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  // Only one button per group can be selected
  document.querySelectorAll(".option-group").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group
          .querySelectorAll("button")
          .forEach((b) => b.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  });
});

const PRODUCTS = {
  MK514: {
    id: "MK514",
    name: "EBike100 Electric Cargo Bike MK514/MK516 + NFC Card",
    price: 850,
    description: "Battery Capacity 48V 30AH / Wheel Size (inch) 14",
    image: "../assets/images/MK514.png",
  },
  MK220: {
    id: "MK220",
    name: "Electric Cargo Bike MK220",
    price: 950,
    description: "Dual Seat / 48V 30AH / 14-Inch Tires",
    image: "../assets/images/MK220.png",
  },
};

function getProductByPage() {
  const path = window.location.pathname;
  if (path.includes("MK514")) return PRODUCTS.MK514;
  if (path.includes("MK220")) return PRODUCTS.MK220;
  return PRODUCTS.MK220; // default fallback
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartHasItems", "true");
}

function handleAddToCart() {
  const batteryBtn = document.querySelector("#battery-options .selected");
  const wheelBtn = document.querySelector("#wheel-options .selected");
  const button = document.querySelector(".add-to-cart");

  if (!batteryBtn || !wheelBtn) {
    alert("Please select battery capacity and wheel size.");
    return;
  }

  const selectedBattery = batteryBtn.dataset.value;
  const selectedWheel = wheelBtn.dataset.value;

  const baseProduct = getProductByPage();
  const product = {
    ...baseProduct,
    battery: selectedBattery,
    wheelSize: selectedWheel,
    cartId: Date.now().toString(), // Unique cart item ID
  };

  addToCart(product);

  button.classList.add("added");
  button.innerHTML = `<span class="tick">✓</span> Added`;

  setTimeout(() => {
    button.classList.remove("added");
    button.innerHTML = `Add to Cart`;
  }, 3500);

  const cartIconMobile = document.getElementById("cart-icon-mobile");
  const cartIconDesktop = document.getElementById("cart-icon-desktop");

  if (cartIconMobile) {
    cartIconMobile.src = "../assets/images/ShoppingCart_Item.png";
    shakeIcon(cartIconMobile);
  }
  if (cartIconDesktop) {
    cartIconDesktop.src = "../assets/images/ShoppingCart_Item.png";
    shakeIcon(cartIconDesktop);
  }
}

function shakeIcon(icon) {
  if (!icon) return;
  icon.classList.remove("shake");
  void icon.offsetWidth;
  icon.classList.add("shake");
  setTimeout(() => {
    icon.classList.remove("shake");
  }, 500);
}
