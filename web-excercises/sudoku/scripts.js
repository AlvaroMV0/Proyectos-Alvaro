let canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerWidth * 0.6;
canvas.width = window.innerWidth * 0.6;



// ---- Quadrant lines ----

//-Positions
//Vertical quadrant lines
positionOneX = canvas.width/3;
positionTwoX = canvas.width*2/3;
//Horizontal quadrant lines
positionOneY = canvas.height/3;
positionTwoY = canvas.height*2/3;

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


// TODO dark mode 
//      beautifiy
//      
//      
//      
//      
//      