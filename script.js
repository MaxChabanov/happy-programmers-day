function fireConfetti() {
  var count = 400;
  var defaults = {
    origin: { y: -0.4 },
    angle: 270,
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 60,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 80,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 140,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 140,
    startVelocity: 45,
  });
}

fireConfetti();

let emojiElements = document.querySelectorAll(".emoji");

emojiElements.forEach((el) => {
  el.addEventListener("click", fireConfetti);
});
