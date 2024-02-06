const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let swapperId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  swapperId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(getRandomHexColor());
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(swapperId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
