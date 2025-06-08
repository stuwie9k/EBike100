document.addEventListener("DOMContentLoaded", () => {
  // Generate and display a random 6-digit order number
  const orderId = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("order-id").textContent = orderId;

  // Get subtotal from localStorage (set in checkout.js before redirect)
  const subtotal = localStorage.getItem("lastOrderTotal");

  // If available, populate the subtotal and total
  if (subtotal) {
    document.getElementById("summary-subtotal").textContent = `${subtotal} AUD`;
    document.getElementById("summary-total").textContent = `${subtotal} AUD`;
  } else {
    // Fallback if no data found
    document.getElementById("summary-subtotal").textContent = "$0.00 AUD";
    document.getElementById("summary-total").textContent = "$0.00 AUD";
  }

  // Clear cart and temporary data
  localStorage.removeItem("cart");
  localStorage.setItem("cartHasItems", "false");
  localStorage.removeItem("lastOrderTotal");
});
