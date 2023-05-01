function applyClassByKeyCode(event, action) {
  const keyCode = event.keyCode;
  const cssClass = "playing";

  const elements = document.querySelectorAll(`[data-key="${keyCode}"]`);

  elements.forEach((element) => {
    if (action === "add") {
      element.classList.add(cssClass);
      if (element.tagName.toLowerCase() === "audio") {
        element.currentTime = 0;
        element.play();
      }
    } else if (action === "remove") {
      element.classList.remove(cssClass);
    }
  });
}

document.addEventListener("keydown", function (event) {
  applyClassByKeyCode(event, "add");
});

document.addEventListener("keyup", function (event) {
  applyClassByKeyCode(event, "remove");
});
