let inputs = document.querySelectorAll("input");
let body = document.body;

function updateDoc() {
  let suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((element) => {
  element.addEventListener("change", updateDoc);
  element.addEventListener("mousemove", updateDoc);
});
