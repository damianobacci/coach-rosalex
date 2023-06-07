const ball = document.querySelector("img");
const field = document.getElementById("field");
document.body.addEventListener("click", function (event) {
  if (field.contains(event.target)) {
    const fieldData = field.getBoundingClientRect();
    let ballLeft = event.clientX - fieldData.left - ball.offsetWidth / 2 - 10;
    let ballTop = event.clientY - fieldData.top - ball.offsetHeight / 2 - 10;
    if (ballLeft < 0) ballLeft = 0;
    if (ballTop < 0) ballTop = 0;
    if (ballLeft + ball.clientWidth > field.clientWidth) {
      ballLeft = field.clientWidth - ball.clientWidth;
    }
    if (ballTop + ball.clientHeight > field.clientHeight) {
      ballTop = field.clientHeight - ball.clientHeight;
    }
    ball.style.position = "relative";
    ball.style.left = `${ballLeft}px`;
    ball.style.top = `${ballTop}px`;
    danger.style.display = "none";
  } else {
    let danger = document.getElementById("danger");
    danger.style.display = "inline";
  }
});
