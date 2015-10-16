/**
 * Created by yinxuesong on 2015/10/13.
 */
console.log("hello");



function cal(moneyString){
    var money = parseFloat(moneyString);
    var tax = 0;
    var more = 0;
    if(money <= 3500){
        console.log("不交税");
    }else if(money <= 5000){
        more = money - 3500;
        tax = more * 0.03;
        console.log("应交："+tax);
    }else if(money < 8000){
        more = money - 3500;
        tax = more * 0.05;
        console.log("应交："+tax);
    }else{
        more = money - 3500;
        tax = more * 0.1;
    }
    console.log("税收应该为："+ tax);
}