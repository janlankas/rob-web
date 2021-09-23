



// CANVAS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const title = document.querySelector('h1');
//Listener
document.addEventListener('keydown', keyPush);

//game 


let score = 0;
const fps = 22;
const snakeSize = 50;
const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;

// PLAYER
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let snakeSpeed = snakeSize;
let foodPosX = 400;
let foodPosY = 100;

let velocityX = 0;
let velocityY = 0;

//loop
function gameLoop() {
    drawStuff();
    moveStuff();
    setTimeout(gameLoop, 1000 / fps);
    // requestAnimationFrame(gameLoop);
}

resetFood();
gameLoop();


// MOVE EVERYTHING
function moveStuff() {
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;
    //wall collision
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
    //food collision
    if (snakePosX === foodPosX && snakePosY === foodPosY) {
        title.textContent = ++score

        resetFood();
    }
}


// DRAW EVERYTHING
function drawStuff() {
    //background
    rectangle("#ffbf00", 0, 0, canvas.width, canvas.height);

    //grid
    drawGrid();

    //food 
    rectangle("blue", foodPosX, foodPosY, snakeSize, snakeSize);

    //Snake
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);

}

function resetFood() {
    foodPosX = Math.floor(Math.random() * tileCountX) * snakeSize;
    foodPosY = Math.floor(Math.random() * tileCountY) * snakeSize;

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