document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-item h3").forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  document.querySelector(".add-to-cart").addEventListener("click", () => {
    alert("Added to cart!");
  });
});
