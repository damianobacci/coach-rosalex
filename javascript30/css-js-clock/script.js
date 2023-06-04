const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function drawClock() {
  let now = new Date();

  let hours = now.getHours();
  let hoursDegree = hours * 30 + 90;

  let minutes = now.getMinutes();
  let minutesDegree = minutes * 6 + 90;

  let seconds = now.getSeconds();
  let secondsDegree = seconds * 6 + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(drawClock, 1000);
