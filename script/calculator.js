/**
 * Created by yinxuesong on 2015/10/9.
 */

//����ȫ�ֱ������ñ����洢��Ļ�ϵ����֡����������ʱ����ֵ
var firstNum = 0;
var operation = null;
var temp = 0.0;
/**
 * �����ťʱ������,�õ������������
 * @param input
 * @returns {number}
 */
function getNum(input) {
    //�ж��Ƿ�����С����
    var pointed = /^\-?[0-9]*\.[0-9]*$/;
    var numString = document.getElementById(input).value;
    var temp = getOneNum(numString);
    document.getElementById('content').value = temp;
}

/**
 *�÷���ֻ��getNum��������
 */
function getOneNum(numString) {
    var onePoint = /^\-?[0-9]*\.[0-9]*$/;
    var points = /^\-?[0-9]*\.[0-9]*$/;


    //var temp = 0;
    //if(onePoint.test())

    //��ȡ��Ļ�ϵ�����
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
 * ��ȡ����������tempֵ
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
 * ����
 * @param input
 */
function makeClear(input) {
    var firstNum = 0;
    var operation = null;
    var temp = 0;
    document.getElementById('content').value = 0;
}

/**
 * ������
 * @param input
 */
function getResult(input) {
    console.log("get result");
    if (input == 'getResult') {//������
        var result = 0;
        if (operation == '+') {
            result = firstNum + temp;
        } else if (operation == '-') {
            result = firstNum - temp;
        } else if (operation == '*') {
            result = firstNum * temp;
        } else if (operation == '/') {
            if (temp == 0) {
                alert("��������Ϊ0��");
            } else {
                result = firstNum / temp;
            }
        }
        temp = result;
        document.getElementById('content').value = result;
    }
}
