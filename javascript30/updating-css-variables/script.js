let inputs = document.querySelectorAll("input");

function consoleLogging(e) {
  console.log(e.target.value);
}

inputs.forEach((element) => {
  element.addEventListener("change", consoleLogging);
});
