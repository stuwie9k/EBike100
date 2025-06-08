document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input[required]");
    let allValid = true;

    // Clear previous error states/messages
    inputs.forEach((input) => {
      input.classList.remove("error");
      const msg = input.nextElementSibling;
      if (msg && msg.classList.contains("error-message")) {
        msg.remove();
      }
    });

    // Validate all required inputs
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allValid = false;
        input.classList.add("error");

        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = "This field is required";
        input.after(error);
      }
    });

    if (!allValid) {
      // Optionally scroll to top of form
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If valid: clear cart and redirect
    localStorage.removeItem("cart");
    localStorage.setItem("cartHasItems", "false");
    window.location.href = "confirmation.html";
  });
});

// Prevents text to be typed at MM/YY

const expiryInput = document.getElementById("expiry");

expiryInput.addEventListener("input", () => {
  // Replace anything that's not a digit
  expiryInput.value = expiryInput.value.replace(/\D/g, "");
});

const cvvInput = document.getElementById("security-code");

cvvInput.addEventListener("input", () => {
  cvvInput.value = cvvInput.value.replace(/\D/g, ""); // Remove non-digits
});

const postcodeInput = document.getElementById("postcode");

postcodeInput.addEventListener("input", () => {
  postcodeInput.value = postcodeInput.value.replace(/\D/g, ""); // Remove non-digits
});
