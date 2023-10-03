let value = 0;
const scoreElement = document.getElementById('scoreValue');

export function updateScore() {
    scoreElement.textContent = ++value;
}