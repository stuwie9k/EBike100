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

      const orderNumber = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("orderNumber", orderNumber);
      localStorage.setItem("lastOrderTotal", subtotal.toFixed(2));
      localStorage.removeItem("cart");
      localStorage.setItem("cartHasItems", "false");

      // Show loading overlay
      const overlay = document.getElementById("loading-overlay");
      overlay.classList.remove("hidden");

      // Delay to simulate processing
      setTimeout(() => {
        window.location.href = "orderconfirmation.html";
      }, 1500); // 1.5 seconds delay
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
