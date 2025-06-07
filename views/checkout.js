document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const summaryContainer = document.getElementById("checkout-cart-summary");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const totalEl = document.getElementById("checkout-total");

  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.style.margin = "10px 0";
    itemDiv.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${item.image}" style="width:50px;height:auto;" />
          <div style="font-size:0.85rem;">
            <strong>${item.name}</strong><br/>
            Battery: ${item.battery} / Wheel: ${item.wheelSize} inch
          </div>
          <div style="margin-left:auto;">$${item.price.toFixed(2)} AUD</div>
        </div>
      `;
    summaryContainer.appendChild(itemDiv);
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)} AUD`;
  totalEl.textContent = `$${subtotal.toFixed(2)} AUD`;

  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    localStorage.setItem("cartHasItems", "false");
    window.location.href = "confirmation.html";
  });
});
