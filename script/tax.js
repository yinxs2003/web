/**
 * Created by yinxuesong on 2015/10/13.
 */
console.log("hello");



function cal(moneyString){
    var money = parseFloat(moneyString);
    var tax = 0;
    var more = 0;
    if(money <= 3500){
        console.log("����˰");
    }else if(money <= 5000){
        more = money - 3500;
        tax = more * 0.03;
        console.log("Ӧ����"+tax);
    }else if(money < 8000){
        more = money - 3500;
        tax = more * 0.05;
        console.log("Ӧ����"+tax);
    }else{
        more = money - 3500;
        tax = more * 0.1;
    }
    console.log("˰��Ӧ��Ϊ��"+ tax);
}