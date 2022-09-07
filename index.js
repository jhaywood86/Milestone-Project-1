//declaring gameboard variables first//
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const paddleSpeed = 50;

//pong ball variables added//
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;

//paddle objects defined//
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart ();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function drawPaddles(){};
function creatBall(){};
function moveBall(){};
function drawBall(){};
function checkCollision(){};
function changeDirection(){};
function updateScore(){};
function resetGame(){};
