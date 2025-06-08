document.addEventListener("DOMContentLoaded", () => {
  // Generate and display random 6-digit order number
  const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
  const orderIdEl = document.getElementById("order-id");
  if (orderIdEl) {
    orderIdEl.textContent = randomOrderNumber;
  }

  // Retrieve and display last order total
  const total = localStorage.getItem("lastOrderTotal");
  if (total) {
    document.getElementById("confirm-subtotal").textContent = `$${total} AUD`;
    document.getElementById("confirm-total").textContent = `$${total} AUD`;
  }

  // Clean up cart (but NOT total)
  localStorage.removeItem("cart");
  localStorage.setItem("cartHasItems", "false");

  // Clear lastOrderTotal ONLY when user continues shopping
  const continueBtn = document.querySelector(".continue-btn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      localStorage.removeItem("lastOrderTotal");
      window.location.href = "productpage.html";
    });
  }
});
