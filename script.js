const choiceButtons = document.querySelectorAll(".choice-btn");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultMsg = document.getElementById("resultMsg");
const winsCount = document.getElementById("winsCount");
const lossesCount = document.getElementById("lossesCount");
const tiesCount = document.getElementById("tiesCount");
const resetBtn = document.getElementById("resetBtn");

const EMOJI = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

const RESULT_TEXT = {
  win: "You Win! 🎉",
  lose: "You Lose! 💀",
  tie: "It's a Tie! 🤝",
};

async function play(choice) {
  try {
    const response = await fetch("/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ choice }),
    });

    const data = await response.json();

    if (!response.ok) {
      resultMsg.textContent = data.error || "Something went wrong.";
      return;
    }

    // Update displays
    playerDisplay.textContent = EMOJI[data.player];
    computerDisplay.textContent = EMOJI[data.computer];
    playerDisplay.classList.remove("pop");
    computerDisplay.classList.remove("pop");
    void playerDisplay.offsetWidth; // trigger reflow to restart animation
    void computerDisplay.offsetWidth;
    playerDisplay.classList.add("pop");
    computerDisplay.classList.add("pop");

    // Update result message
    resultMsg.textContent = RESULT_TEXT[data.result];
    resultMsg.classList.remove("win", "lose", "tie");
    resultMsg.classList.add(data.result);

    // Update scoreboard
    winsCount.textContent = data.score.wins;
    lossesCount.textContent = data.score.losses;
    tiesCount.textContent = data.score.ties;
  } catch (err) {
    resultMsg.textContent = "Could not reach server.";
  }
}

async function resetScore() {
  try {
    const response = await fetch("/reset", { method: "POST" });
    const data = await response.json();

    winsCount.textContent = data.wins;
    lossesCount.textContent = data.losses;
    tiesCount.textContent = data.ties;

    playerDisplay.textContent = "❓";
    computerDisplay.textContent = "❓";
    resultMsg.textContent = "Make your move!";
    resultMsg.classList.remove("win", "lose", "tie");
  } catch (err) {
    resultMsg.textContent = "Could not reset score.";
  }
}

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => play(btn.dataset.choice));
});

resetBtn.addEventListener("click", resetScore);
