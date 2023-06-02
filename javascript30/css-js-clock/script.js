const secondHand = document.querySelector(".second-hand");

function drawClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let secondsDegree = (seconds * 360) / 60 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  console.log(seconds);
}

setInterval(drawClock, 1000);
