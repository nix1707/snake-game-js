import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { updateScore } from "./score.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        updateScore();
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition;

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition;
}