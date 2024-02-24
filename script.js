const text = "Full Stack Web Developer";
const typingEffectElement = document.getElementById("typing-effect");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingEffectElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 220); // Adjust the typing speed (milliseconds per character)
  }
}

typeText();