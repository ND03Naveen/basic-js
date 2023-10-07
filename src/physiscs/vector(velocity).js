
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function render(){
    ctx.canvas.height = document.documentElement.clientHeight;
    ctx.canvas.width = document.documentElement.clientWidth;
}
render();

function drawCircle(x,y,r,c){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2,true); // circle
    ctx.fillStyle = c;
    ctx.fill();
}

drawCircle(ctx.canvas.width*0.1,ctx.canvas.height*0.1,40,"red");
drawCircle(ctx.canvas.width*0.3,ctx.canvas.height*0.3,60,"pink");