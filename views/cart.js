document.querySelectorAll(".cart-toggle").forEach((icon) => {
  icon.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
});

function loadCart() {
  const cartContainer = document.getElementById("cart-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.classList.add("empty");
    return;
  }

  cartContainer.classList.remove("empty");
  cartContainer.classList.add("full");
  cartContainer.innerHTML = `<h2>Your Bag (${cart.length})</h2><div class="cart-items"></div>`;

  const itemsContainer = cartContainer.querySelector(".cart-items");
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
  <div class="cart-item-img">
    <img src="${item.image}" alt="${item.name}" />
  </div>
  <div class="cart-item-details">
  <div class="cart-item-title"><strong>${item.name}</strong></div>
  <div class="cart-item-specs">
    Battery Capacity ${item.battery || "N/A"} / Wheel Size (inch) ${
      item.wheelSize || "N/A"
    }
  </div>
  <div class="cart-item-remove">
    <a href="#" onclick="removeItem('${item.id}')">Remove</a>
  </div>
</div>
  <div class="cart-item-summary">
  <div class="qty-price">
    <select class="quantity-select">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <span class="item-price">$${item.price.toFixed(2)} AUD</span>
  </div>
</div>
`;
    itemsContainer.appendChild(itemDiv);
  });

  const summary = document.createElement("div");
  summary.className = "cart-summary";
  summary.innerHTML = `
      <div><strong>Subtotal</strong> $${subtotal.toFixed(2)} AUD</div>
      <button class="checkout-btn">Checkout</button>
    `;
  cartContainer.appendChild(summary);
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Check if cart is now empty after item is removed
  if (cart.length === 0) {
    localStorage.setItem("cartHasItems", "false");
  }

  loadCart();
}

window.onload = loadCart;
