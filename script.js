let text = document.getElementById("text");
let foodHeader = document.getElementById("food-header");
let button = document.getElementById("Button");
let box = document.querySelector(".box");

function menu() {
  text.textContent = "Order Here";
}

function toggleBackground() {
  foodHeader.classList.toggle("grean");
}
function thisButton() {
  if (box) {
    box.remove();
  }
}
text.addEventListener("click", menu);
foodHeader.addEventListener("click", toggleBackground);
