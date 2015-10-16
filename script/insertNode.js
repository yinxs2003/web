var delButton = '<input type="button" value="ɾ��" onclick="delRow(this)"/>';
var modifyButton = '<input type="button" value="�޸�" onclick="modifyRow(this)"/>';
var saveButton = '<input type="button" value="����" onclick="saveRow(this)"/>';
function insert() {
    var table = document.getElementById('table');
    var tr = table.insertRow(table.rows.length);
    tr.insertCell(0);
    tr.insertCell(1);
    tr.insertCell(2);
    tr.cells[0].innerHTML = "java��̻���";
    tr.cells[1].innerHTML = "20";
    tr.cells[2].innerHTML = delButton + modifyButton;
}

function del() {
    console.log("del()");
    var table = document.getElementById('table');
    var tr = table.deleteRow(table.rows.length - 1);
}

function addStyle() {
    console.log("add style");
    var table = document.getElementById("table");
    var tr = table.rows[0];
    var td1 = tr.cells[0];
    var td2 = tr.cells[1];
    td1.className = "addStyle";
    td2.className = "addStyle";
}

/**
 * ɾ����
 * @param src
 */
function delRow(src) {
    console.log("delButton");
    var table = document.getElementById("table");
    var tr = src.parentNode.parentNode;
    table.deleteRow(tr.rowIndex);
}

/**
 * �޸Ĺ���
 * @param but
 */
function modifyRow(but) {
    var tr = but.parentNode.parentNode;//ָ��ǰtr
    var text1 = tr.cells[0].innerHTML;
    var text2 = tr.cells[1].innerHTML;
    tr.cells[0].innerHTML = '<input type="text" value="'+text1+'"/>';
    tr.cells[1].innerHTML = '<input type="text" value="'+text2+'"/>';
    tr.cells[2].innerHTML = delButton+saveButton;
}

function saveRow(but){
    var tr = but.parentNode.parentNode;//ָ��ǰtr
    var text1 = tr.cells[0].firstChild.value;
    var text2 = tr.cells[1].firstChild.value;
    tr.cells[0].innerHTML = text1;
    tr.cells[1].innerHTML = text2;
    tr.cells[2].innerHTML = delButton+modifyButton;
}