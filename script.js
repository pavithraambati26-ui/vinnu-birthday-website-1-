

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {
                musicButton.innerHTML = "⏸ Pause Music";
            })
            .catch((error) => {
                console.error("Music error:", error);
                alert("Music file play avvatledhu. File path check cheyyi!");
            });

    } else {

        music.pause();
        musicButton.innerHTML = "🎵 Play Birthday Music";

    }
}

// చివరి బటన్ నొక్కితే చిన్న birthday sparkle animation వస్తుంది.
document.getElementById("wishButton").addEventListener("click", () => {
  document.getElementById("wishMessage").textContent =
    "✨ Vinnu, ఈ సంవత్సరం నీకు ఎన్నో మంచి జ్ఞాపకాలు, విజయాలు తీసుకురావాలి! ✨";

  for (let i = 0; i < 28; i++) {
    const star = document.createElement("span");
    star.className = "falling-star";
    star.textContent = ["✦", "✧", "♡", "✺"][Math.floor(Math.random() * 4)];
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (2 + Math.random() * 2) + "s";
    star.style.fontSize = (14 + Math.random() * 14) + "px";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 4200);
  }
});
