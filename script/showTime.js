/**
 * Created by yinxuesong on 2015/10/15.
 */


var int ;

function showTime(){
    int = setInterval("clock()",1000);
}

function stopTime(){
    clearInterval(int);
}

function clock(){
    var time;
    var timeString;
    time = new Date();
    timeString = time.toLocaleString();
    document.getElementById("time").innerHTML= timeString;
}

function clock2(){
    var time;
    var timeString;
    time = new Date();
    timeString = time.toLocaleString();
    document.getElementById("time").innerHTML= timeString;
    showTime2();
}

function showTime2(){
    int = setTimeout("clock2()",1000);
}

function stopTime2(){
    clearTimeout(int);
}
