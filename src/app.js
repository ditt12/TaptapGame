let score = 0;

// Load score from localStorage
window.onload = function() {
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
        score = parseInt(savedScore);
        document.getElementById("score").innerText = score;
    }
};

function tapCircle() {
    score++;
    document.getElementById("score").innerText = score;
    playSound();
    saveScore();
}

function playSound() {
    const audio = new Audio('assets/tap_sound.mp3');
    audio.play();
}

function saveScore() {
    localStorage.setItem("score", score);
}

function resetGame() {
    score = 0;
    document.getElementById("score").innerText = score;
    localStorage.removeItem("score");
}
