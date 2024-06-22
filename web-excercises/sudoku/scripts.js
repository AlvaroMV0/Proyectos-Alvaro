// TODO dark mode 
//      beautifiy
//      puntuaction table
//      generating algorithm
//      new game (continue game??)
//      difficulty
//      highlight errors 
//      all the functions of any sudoku app




let canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");




canvas.height = window.innerWidth * 0.6;
canvas.width = window.innerWidth * 0.6;



// ---- Quadrant lines ----

//-Positions
//Vertical quadrant lines
let positionOneX = canvas.width/3;
let positionTwoX = canvas.width*2/3;
//Horizontal quadrant lines
let positionOneY = canvas.height/3;
let positionTwoY = canvas.height*2/3;

//-Lines
//Vertical quadrant lines
ctx.fillRect(positionOneX, 0, 4, canvas.height);
ctx.fillRect(positionTwoX, 0, 4, canvas.height);
//Horizontal quadrant lines
ctx.fillRect(0, positionOneY, canvas.width, 4);
ctx.fillRect(0, positionTwoY, canvas.width, 4);






//Inner lines
for(let i = 1 ; i < 9; i++){
    //Vertical inner lines
    ctx.fillRect((canvas.width*i)/9, 10, 1, canvas.height-20);
    //Horizontal inner lines
    ctx.fillRect(10,(canvas.width*i)/9, canvas.width-20, 1); 
}
// 10 and -20, are for 



//-Event listener to support adding numbers 
canvas.addEventListener('click', det_pos);
let inner_pos = []; 
function det_pos(event){
    const rect = canvas.getBoundingClientRect();

    let x = ((event.screenX - window.innerWidth) - rect.x)*100  / rect.width;
    let y = (event.screenY- window.innerWidth - rect.right)*100 / rect.height;
    
    if (x <30){
        x = 15;
    } else if (x < 60){
        x = 45;
    } else if (x <100){
        x = 85;
    }
    if (y <30){
        y = 15;
    } else if (y < 60){
        y = 45;
    } else if (y <100){
        y = 85;
    }

    
    x = x/100;
    y = y/100;
    
    inner_pos = [x * canvas.width,y * canvas.height];
    
    ctx.fillRect(inner_pos[0],inner_pos[1], 10, 10);
}



