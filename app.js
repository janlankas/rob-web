// CANVAS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Listener
document.addEventListener('keydown', keyPush);

// PLAYER
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let snakeSpeed = 50;
let velocityX = 0;
let velocityY = 0;

const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;


//loop
function gameLoop() {
    drawStuff();
    moveStuff();
    setTimeout(gameLoop, 1000 / 20);
    // requestAnimationFrame(gameLoop);
}

gameLoop();


// MOVE EVERYTHING
function moveStuff() {
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;
    if (snakePosX > canvas.width - snakeSize) {
        snakePosX = 0;
    }
    if (snakePosX < 0) {
        snakePosX = canvas.width;
    }
    if (snakePosY > canvas.height - snakeSize) {
        snakePosY = 0;
    }
    if (snakePosY < 0) {
        snakePosY = canvas.height;
    }
}


// DRAW EVERYTHING
function drawStuff() {
    //background
    rectangle("#ffbf00", 0, 0, canvas.width, canvas.height);

    //grid
    drawGrid();

    //Snake
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);



}

function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}


function drawGrid() {
    for (let i = 0; i < tileCountX; i++) {
        for (let j = 0; j < tileCountY; j++) {
            rectangle("white", snakeSize * i, snakeSize * j, snakeSize - 1, snakeSize - 1)
        }
    }

}
//Keyboard EVERYTHING
function keyPush(event) {
    switch (event.key) {
        case 'ArrowLeft':
            if (velocityX != 1) {
                velocityX = -1;
                velocityY = 0;
            }
            break;
        case 'ArrowUp':
            if (velocityY != 1) {
                velocityX = 0;
                velocityY = -1;
            }

            break;
        case 'ArrowRight':
            if (velocityX != -1) {
                velocityX = 1;
                velocityY = 0;
            }

            break;
        case 'ArrowDown':
            if (velocityY != -1) {
                velocityX = 0;
                velocityY = 1;
            }

            break;
    }
}