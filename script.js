// Countdown
const countdown = () => {
  const eventDate = new Date("December 31, 2025 20:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerText = "Bayram boshlandi! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / (1000 * 60)) % 60);
  const secs = Math.floor((distance / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days} kun, ${hours} soat, ${mins} daqiqa, ${secs} soniya`;
};

setInterval(countdown, 1000);

// Fireworks
function createFirework() {
  const container = document.getElementById("fireworks");
  for (let i = 0; i < 30; i++) { // 30 ta zar = 80% to‘ldiradi
    const firework = document.createElement("div");
    firework.classList.add("firework");

    const size = Math.random() * 6 + 4 + "px";
    const left = Math.random() * 100 + "%";
    const top = Math.random() * 80 + "%"; // faqat yuqori 80% qismida portlasin
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    Object.assign(firework.style, {
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      left,
      top,
      boxShadow: `0 0 10px ${color}`,
      transform: `scale(${Math.random() * 2 + 1})`,
      animation: "explode 0.8s ease-out forwards"
    });

    container.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }
}

setInterval(createFirework, 4000);

// Zar portlash animatsiyasi
const style = document.createElement('style');
style.innerHTML = `
@keyframes explode {
  0% { opacity: 1; transform: scale(0.5) translateY(0); }
  100% { opacity: 0; transform: scale(3) translateY(-80px); }
}
`;
document.head.appendChild(style);
