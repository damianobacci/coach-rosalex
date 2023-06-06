let text = document.getElementById("text");
let button = document.querySelector("button");
let button2 = document.querySelectorAll("button")[1];

button.addEventListener("click", () => (text.style.display = "none"));
button2.addEventListener("click", () => (text.style.display = "block"));
