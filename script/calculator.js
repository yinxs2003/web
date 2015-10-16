/**
 * Created by yinxuesong on 2015/10/9.
 */

//定义全局变量，该变量存储屏幕上的数字、运算符和临时变量值
var firstNum = 0;
var operation = null;
var temp = 0.0;
/**
 * 点击按钮时被调用,得到输输入的数字
 * @param input
 * @returns {number}
 */
function getNum(input) {
    //判断是否输入小数点
    var pointed = /^\-?[0-9]*\.[0-9]*$/;
    var numString = document.getElementById(input).value;
    var temp = getOneNum(numString);
    document.getElementById('content').value = temp;
}

/**
 *该方法只被getNum方法调用
 */
function getOneNum(numString) {
    var onePoint = /^\-?[0-9]*\.[0-9]*$/;
    var points = /^\-?[0-9]*\.[0-9]*$/;


    //var temp = 0;
    //if(onePoint.test())

    //读取屏幕上的数字
    var myResult = document.getElementById("content").value;
    myResult =

    temp = temp * 10 + num;
    return temp;
}

function getPointedNum(num) {
    temp = temp / 10 + num;
    return temp;
}


function point() {

}

/**
 * 获取运算符，清除temp值
 * @param input
 */
function getOperator(input) {
    if (input == 'plus') {
        operation = '+';
        firstNum = temp;
        temp = 0;
    } else if (input == 'minus') {
        operation = '-';
        firstNum = temp;
        temp = 0;
    } else if (input == 'multiply') {
        operation = '*';
        firstNum = temp;
        temp = 0;
    } else if (input == 'divide') {
        operation = '/';
        firstNum = temp;
        temp = 0;
    }
}

/**
 * 清零
 * @param input
 */
function makeClear(input) {
    var firstNum = 0;
    var operation = null;
    var temp = 0;
    document.getElementById('content').value = 0;
}

/**
 * 计算结果
 * @param input
 */
function getResult(input) {
    console.log("get result");
    if (input == 'getResult') {//计算结果
        var result = 0;
        if (operation == '+') {
            result = firstNum + temp;
        } else if (operation == '-') {
            result = firstNum - temp;
        } else if (operation == '*') {
            result = firstNum * temp;
        } else if (operation == '/') {
            if (temp == 0) {
                alert("除数不能为0！");
            } else {
                result = firstNum / temp;
            }
        }
        temp = result;
        document.getElementById('content').value = result;
    }
}
