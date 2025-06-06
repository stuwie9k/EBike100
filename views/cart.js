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
  cartContainer.innerHTML =
    "<h2>Your Bag (" + cart.length + ')</h2><div class="cart-items"></div>';

  const itemsContainer = cartContainer.querySelector(".cart-items");
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
  <img src="${item.image}" alt="${item.name}" style="height:80px;" />
  <div>
    <strong>${item.name}</strong><br/>
    Battery: ${item.battery || "N/A"}<br/>
    Wheel Size: ${item.wheelSize || "N/A"} inch<br/>
    <a href="#" onclick="removeItem('${item.id}')">Remove</a>
  </div>
  <div>$${item.price.toFixed(2)} AUD</div>
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
  loadCart();
}

window.onload = loadCart;
