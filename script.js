const target = document.createElement("div");
target.setAttribute("class", "countdown");
document.body.append(target);

const countdownNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const finalMessage = "HAPPY 78th INDEPENDENCE DAY / AUG-15-2024";

function updateDisplay(content) {
  target.textContent = content;
  console.log(content);
}

function countdown(index) {
  if (index < countdownNumbers.length) {
    updateDisplay(countdownNumbers[index]);
    setTimeout(() => countdown(index + 1), 1000);
  } else {
    target.setAttribute("id", "final-message");
    updateDisplay(finalMessage);
    createConfetti();
  }
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "by<br>Vijayakumar R<br>Full Stack Developer/MERN";
  document.body.appendChild(footer);
}

function createConfetti() {
  const colors = ['#FF9933', '#FFFFFF', '#138808', '#000080'];

  function spawnConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`);
    confetti.style.setProperty('--fall-delay', `${Math.random() * 5}s`);
    confetti.style.setProperty('--sway-duration', `${Math.random() * 6 + 3}s`);
    confetti.style.setProperty('--sway-amplitude', `${Math.random() * 15 + 5}px`);

    document.body.appendChild(confetti);

    // Remove confetti after animation and spawn a new one
    confetti.addEventListener('animationend', () => {
      confetti.remove();
      spawnConfetti();
    });
  }

  // Initial spawn of confetti
  for (let i = 0; i < 100; i++) {
    spawnConfetti();
  }
}

createFooter();
countdown(0);