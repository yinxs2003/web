/**
 * Created by yinxuesong on 28/9/15.
 */
window.onload=function(){

}

function drawRectangle(id){
    var context=getCanvas(id);

    context.strokeStyle="#F60";//边框颜色 stroke 画笔
    context.lineWidth=5;//画笔宽度
    context.strokeRect(50,50,150,100);
}

function getCanvas(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");

    //先画一个黑色填充的矩形
    context.fillStyle = "#000";
    context.fillRect(0, 0, 400, 300)
    return context;
}


function drawCircle1(id) {//实心圆

    var context=getCanvas(id);

    //在画一个圆
    context.fillStyle="#F60"
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);/*中心X,中心Y，半径，起始角度，结束角度，顺时针或逆时针*/
    context.closePath();
    context.fill();//画
}

function drawCircle2(id) {//空心圆
    var context=getCanvas(id);

    //在画一个空心圆
    context.beginPath();
    context.arc(200,200,50,0,360,false);
    context.lineWidth=5;
    context.strokeStyle="green";
    context.stroke();//画空心圆
    context.closePath();
}

function drawWords(id){
    var context = getCanvas(id);

    context.font="bold 40px '华文行楷','微软雅黑'";

    context.fillStyle = "blue";
    context.fillText("draw了一个单词",50,50);

    context.strokeStyle = "blue";
    context.strokeText("draw了一个单词",50,250);
}

function drawBezierLine(id){
        var canvas = document.getElementById(id);
        if (canvas == null) {
            return false;
        }
        var context = canvas.getContext("2d");
        context.fillStyle = "#EEEFF";
        context.fillRect(0, 0, 400, 300);
        var n = 0;
        var dx = 150;
        var dy = 150;
        var s = 100;
        context.beginPath();
        context.globalCompositeOperation = 'and';
        context.fillStyle = 'rgb(100,255,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 15 * 11;
        context.moveTo(dx, dy);
        for (var i = 0; i < 30; i++) {
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
        }
        context.closePath();
        context.fill();
        context.stroke();
}