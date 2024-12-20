var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
var minute = 0;

function drawclock() {
    drawface(ctx, radius);
    drawnumbers(ctx,radius);
    drawtime(ctx,radius);
}

function drawface(ctx, radius){
    var grad;
    ctx.beginPath();
    //this code draw background of the clock 
    ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1,'#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    //below code is for creating central circle in the clock
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();   
}

function drawnumbers(ctx,radius) {
    
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num<13;num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(ang);
        ctx.translate(0,radius*0.85);
        ctx.rotate(-ang);
    }    
}

function drawtime(ctx,radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawhand(ctx,hour, radius*0.5, radius*0.07);
    
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawhand(ctx,minute,radius*0.8,radius*0.07);
    
    second = (second*Math.PI/30);
    drawhand(ctx,second,radius*0.9,radius*0.02);
    
}

function drawhand(ctx,pos,length,width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);
}

setInterval(drawclock,1000);

/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
var minute = 0;

function drawclock() {
    drawface(ctx, radius);
    drawnumbers(ctx,radius);
    drawtime(ctx,radius);
}

function drawface(ctx, radius){
    var grad;
    ctx.beginPath();
    //this code draw background of the clock 
    ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
    grad =drawhand(ctx,minute,radius*0.8,radius*0.07);ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1,'#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    //below code is for creating central circle in the clock
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();   
}

function drawnumbers(ctx,radius) {
    
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num<13;num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(ang);
        ctx.translate(0,radius*0.85);
        ctx.rotate(-ang);
    }    
}

function drawtime(ctx,radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawhand(ctx,hour, radius*0.5, radius*0.07);
    
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawhand(ctx,minute,radius*0.8,radius*0.07);
    
    second = (second*Math.PI/30);
    drawhand(ctx,second,radius*0.9,radius*0.02);
    
}

function drawhand(ctx,pos,length,width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);
}

drawclock();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90

function drawclock() {
    drawface(ctx, radius);
    drawnumbers(ctx,radius);
    drawtime(ctx,radius);
}

function drawface(ctx, radius){
    var grad;
    ctx.beginPath();
    //this code draw background of the clock 
    ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
    grad =drawhand(ctx,minute,radius*0.8,radius*0.07);ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1,'#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    //below code is for creating central circle in the clock
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();   
}

function drawnumbers(ctx,radius) {
    
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num<13;num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(ang);
        ctx.translate(0,radius*0.85);
        ctx.rotate(-ang);
    }    
}

function drawtime(ctx,radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawhand(ctx,hour, radius*0.5, radius*0.07);
    
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawhand(ctx,minute,radius*0.8,radius*0.07);
    
    second = (second*Math.PI/30);
    drawhand(ctx,second,radius*0.9,radius*0.02);
    
}

function drawhand(ctx,pos,length,width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);
}
drawclock();
*/