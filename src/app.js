let score = 0;

function setUsername() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!username) {
        errorMessage.innerText = "Username cannot be empty!";
        return;
    }

    // Cek apakah username sudah ada di localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.includes(username)) {
        errorMessage.innerText = "Username already taken!";
        return;
    }

    // Simpan username dan tampilkan game
    existingUsers.push(username);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("currentUser", username);

    document.getElementById("username-form").style.display = "none";
    document.getElementById("game").style.display = "block";
    score = 0;
    document.getElementById("score").innerText = score;

    // Tampilkan leaderboard
    displayLeaderboard();
}

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
