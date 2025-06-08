document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const summaryContainer = document.getElementById("checkout-cart-summary");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const totalEl = document.getElementById("checkout-total");

  let subtotal = 0;

  if (summaryContainer && cart.length > 0) {
    cart.forEach((item) => {
      subtotal += item.price;

      const itemDiv = document.createElement("div");
      itemDiv.style.margin = "10px 0";
      itemDiv.innerHTML = `
           <div class="checkout-item-row">
    <img src="${item.image}" class="checkout-item-img" />
    <div class="checkout-item-details">
      <strong>${item.name}</strong><br/>
      Battery: ${item.battery} / Wheel: ${item.wheelSize} inch
    </div>
    <div class="checkout-item-price">
      $${item.price.toFixed(2)} AUD
    </div>
  </div>
        `;
      summaryContainer.appendChild(itemDiv);
    });

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)} AUD`;
    if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)} AUD`;
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) return;

      e.preventDefault();
      localStorage.removeItem("cart");
      localStorage.setItem("cartHasItems", "false");
      window.location.href = "confirmation.html";
    });
  }

  const forceNumeric = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        el.value = el.value.replace(/\D/g, "");
      });
    }
  };

  ["card-number", "expiry", "security-code", "postcode"].forEach(forceNumeric);
});
