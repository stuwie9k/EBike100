// Collapse function in product details //
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-item h3").forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
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

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Only one button per group can be selected//
window.addEventListener("DOMContentLoaded", () => {
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
