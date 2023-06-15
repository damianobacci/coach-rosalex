const emojis = ["😍", "😘", "😂", "🤣", "😆", "😁"];

function removeFullStop(text) {
  if (text.endsWith(".")) {
    text = text.slice(0, -1);
  }
  return text;
}

function convertText() {
  const message = document.getElementById("boomer");
  if (!message.value) {
    message.placeholder = "Yooooo insert a message first!! 👈👈";
  } else {
    let text = message.value;
    if (text.endsWith("!")) {
      text = text.slice(0, -1);
    }
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    text = removeFullStop(text);
    let converted = (text += "! " + randomEmoji);
    let textArea = document.getElementById("millennial");
    textArea.textContent = converted;
  }
}
const button = document.getElementById("convert");
button.addEventListener("click", convertText);

document.addEventListener("keypress", (event) => {
  let keyCode = event.keyCode;
  if (keyCode === 13) {
    button.click();
  }
});
