// CANVAS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Listener
document.addEventListener('keydown', keyPush);

// PLAYER
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;
let snakeSpeed = 5;




//loop
function gameLoop() {
    drawStuff();
    //moveStuff();
    requestAnimationFrame(gameLoop);
}

gameLoop();


// MOVE EVERYTHING
function moveStuff() {
    snakePosX += snakeSpeed;
    if (snakePosX > canvas.width) {
        snakePosX = 0;
    }


}


// DRAV EVERYTHING
function drawStuff() {
    rectangle("white", 0, 0, canvas.width, canvas.height)
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize)


}

function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

//Keyboard EVERYTHING
function keyPush(event) {
    switch (event.key) {
        case 'ArrowLeft':
            snakePosX -= snakeSpeed;
            break;
        case 'ArrowUp':
            snakePosY -= snakeSpeed;
            break;
        case 'ArrowRight':
            snakePosX += snakeSpeed;
            break;
        case 'ArrowDown':
            snakePosY += snakeSpeed;
            break;
    }
}