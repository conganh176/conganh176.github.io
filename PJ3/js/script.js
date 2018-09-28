var canvas = document.getElementById("myCanvas");

function resizeCanvas() {
	canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();

var ctx = canvas.getContext("2d");

var paddleHeight = 88;
var paddleWidth = 40;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height-paddleHeight;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var enemyTotal = 18,
    enemies = [],
    enemy_x = 20,
    enemy_y = -45,
    enemy_w = 50,
    enemy_h = 50,
    speed = 5;
for (var i = 0; i < enemyTotal; i++) {
  enemies.push([enemy_x, enemy_y, enemy_w, enemy_h, speed]);
  enemy_x += enemy_w + 20;
}

var enemy,
    paddle;

enemy = new Image();
enemy.src = 'img/8bit_enemy.png';
paddle = new Image();
paddle.src = 'img/111.png';
paddleright = new Image();
paddleright.src = 'img/112.png';
paddleleft = new Image();
paddleleft.src = 'img/113.png';

var laserTotal = 4,
    lasers = [];

var score = 0;
var lives = 3;
var alive = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawScore() {
    ctx.font = "15px PressStart";
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+score, 10, 20);
    if (!alive) {
        ctx.fillText('Game Over!', canvas.width/2-80, canvas.height / 2);
        // ctx.fillRect((width / 2) - 53, (height / 2) + 10,100,40);
        ctx.fillStyle = 'white';
        // ctx.fillText('Continue?', 252, (height / 2) + 35);
        canvas.addEventListener('keydown', continueButton, false);
    }
}

function drawLives() {
    ctx.font = "15px PressStart";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: "+lives, canvas.width-130, 20);
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;    
    } 
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    if (e.keyCode == 38) {
        upPressed = true;
    }
    else if (e.keyCode == 40) {
        downPressed = true;
    }
    if (e.keyCode == 90 && lasers.length <= laserTotal) {
        lasers.push([paddleX + 17, paddleY - 10, 5, 20]);
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
    if (e.keyCode == 38) {
        upPressed = false;
    }
    else if (e.keyCode == 40) {
        downPressed = false;
    }
}

function drawPaddle() {
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 5;
        ctx.drawImage(paddleright, paddleX, paddleY);
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 5;
        ctx.drawImage(paddleleft, paddleX, paddleY);
    }
    if (upPressed && paddleY > 0) {
        paddleY -= 5;
    } 
    else if (downPressed && paddleY < canvas.height-paddleHeight) {
        paddleY += 5;
    } 
    // ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    // ctx.fillStyle = "white";
    ctx.drawImage(paddle, paddleX, paddleY);
}

function drawEnemies() {

    for (var i = 0; i < enemies.length; i++) {
        // var random = Math.floor(Math.random() * (18 + 1) + 0);
        ctx.drawImage(enemy, enemies[i][0], enemies[i][1]);
    }
}

function moveEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i][1] < canvas.height) {
      enemies[i][1] += enemies[i][4];
      if (enemies[i][0] < paddleX) {
        enemies[i][0] +=1;
      }
      if (enemies[i][0] > paddleX) {
        enemies[i][0] -=1;
      }
    } else if (enemies[i][1] > canvas.height - 1) {
      enemies[i][1] = -50;
      enemies[i][0] = Math.floor(Math.random() * (1280 + 1) + 0)
    }
  }
}

function drawLaser() {
  if (lasers.length)
    for (var i = 0; i < lasers.length; i++) {
      ctx.fillStyle = '#f00';
      ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3],lasers[i][4],lasers[i][5])
    }
}

function moveLaser() {
  for (var i = 0; i < lasers.length; i++) {
    if (lasers[i][1] > -11) {
      lasers[i][1] -= 10;
    } else if (lasers[i][1] < -10) {
      lasers.splice(i, 1);
    }
  }
}

function hitTest() {
  var remove = false;
  for (var i = 0; i < lasers.length; i++) {
    for (var j = 0; j < enemies.length; j++) {
      if (lasers[i][1] <= (enemies[j][1] + enemies[j][3]) && lasers[i][0] >= enemies[j][0] && lasers[i][0] <= (enemies[j][0] + enemies[j][2])) {
        remove = true;
        score += 10;
        enemies.splice(j, 1);
        enemies.push([(Math.random() * 1280) + 50, -45, enemy_w, enemy_h, speed]);
      }
    }
    if (remove == true) {
      lasers.splice(i, 1);
      remove = false;
    }
  }
}

function paddleCollision() {
  var paddleXW = paddleX + paddleWidth,
      paddleYH = paddleY + paddleHeight;
  for (var i = 0; i < enemies.length; i++) {
    if (paddleX > enemies[i][0] && paddleX < enemies[i][0] + enemy_w && paddleY > enemies[i][1] && paddleY < enemies[i][1] + enemy_h) {
      checkLives();
    }
    if (paddleXW < enemies[i][0] + enemy_w && paddleXW > enemies[i][0] && paddleY > enemies[i][1] && paddleY < enemies[i][1] + enemy_h) {
      checkLives();
    }
    if (paddleYH > enemies[i][1] && paddleYH < enemies[i][1] + enemy_h && paddleX > enemies[i][0] && paddleX < enemies[i][0] + enemy_w) {
      checkLives();
    }
    if (paddleYH > enemies[i][1] && paddleYH < enemies[i][1] + enemy_h && paddleXW < enemies[i][0] + enemy_w && paddleXW > enemies[i][0]) {
      checkLives();
    }
  }
}

function checkLives() {
    lives -= 1;
    if (lives > 0) {
        paddleHeight = 88, paddleWidth = 40, paddleX = (canvas.width-paddleWidth)/2, paddleY = canvas.height-paddleHeight;
    } else if (lives == 0) {
        alive = false;
    }
}

function reset() {
    var enemy_reset_x = 50;
    paddleHeight = 88, paddleWidth = 40, paddleX = (canvas.width-paddleWidth)/2, paddleY = canvas.height-paddleHeight;
    for (var i = 0; i < enemies.length; i++) {
        enemies[i][0] = enemy_reset_x;
        enemies[i][1] = -45;
        enemy_reset_x = enemy_reset_x + enemy_w + 20;
    }
}

function continueButton(e) {
    if (e.keycode == 13) {
        alive = true;
        lives = 3;
        reset();
    canvas.removeEventListener('keydown', continueButton, false);
 }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (alive && lives >0) {
        hitTest();
        paddleCollision();
        drawPaddle();
        drawEnemies();
        moveEnemies();
        moveLaser();
        drawLaser();
    }
    drawScore();
    drawLives();
}

setInterval(draw, 20);