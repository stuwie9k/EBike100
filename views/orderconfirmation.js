document.addEventListener("DOMContentLoaded", () => {
  // ✅ Use saved order number from checkout
  const orderIdEl = document.getElementById("order-id");
  const savedOrderNumber = localStorage.getItem("orderNumber");

  if (orderIdEl && savedOrderNumber) {
    orderIdEl.textContent = savedOrderNumber;
  }

  // ✅ Retrieve and display last order total
  const total = localStorage.getItem("lastOrderTotal");
  if (total) {
    document.getElementById("confirm-subtotal").textContent = `$${total} AUD`;
    document.getElementById("confirm-total").textContent = `$${total} AUD`;
  }
});
