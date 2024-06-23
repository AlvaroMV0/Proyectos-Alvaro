// TODO dark mode 
//      beautifiy
//      puntuaction table
//      generating algorithm
//      new game (continue game??)
//      difficulty
//      highlight errors 
//      all the functions of any sudoku app
//      Higher definition on grid


let canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerWidth * 0.6;

// ---- Inner lines ----

ctx.lineWidth = 1; // Thinner lines for inner separators
ctx.strokeStyle = "gray"; // Black color for lines

for (let i = 1; i < 9; i++) {
    // Vertical inner lines
    let posX = (canvas.width * i) / 9;
    ctx.beginPath();
    ctx.moveTo(posX, 10);
    ctx.lineTo(posX, canvas.height - 10);
    ctx.stroke();

    // Horizontal inner lines
    let posY = (canvas.height * i) / 9;
    ctx.beginPath();
    ctx.moveTo(10, posY);
    ctx.lineTo(canvas.width - 10, posY);
    ctx.stroke();
}

// ---- Quadrant lines ----

// Positions
// Vertical quadrant lines
let positionOneX = canvas.width / 3;
let positionTwoX = canvas.width * 2 / 3;
// Horizontal quadrant lines
let positionOneY = canvas.height / 3;
let positionTwoY = canvas.height * 2 / 3;

// Lines
ctx.lineWidth = 4; // Thicker lines for quadrant separators
ctx.strokeStyle = "#000"; // Black color for lines

// Vertical quadrant lines
ctx.beginPath();
ctx.moveTo(positionOneX, 0);
ctx.lineTo(positionOneX, canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(positionTwoX, 0);
ctx.lineTo(positionTwoX, canvas.height);
ctx.stroke();

// Horizontal quadrant lines
ctx.beginPath();
ctx.moveTo(0, positionOneY);
ctx.lineTo(canvas.width, positionOneY);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, positionTwoY);
ctx.lineTo(canvas.width, positionTwoY);
ctx.stroke();

