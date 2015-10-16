/**
 * Created by yinxuesong on 2015/10/13.
 */
function selectAll(){
console.log("change status");
    var checkboxArray = document.getElementsByName("hobby");
    for(var i = 0 ; i < checkboxArray.length;i++){
        if(checkboxArray.item(i).checked){
            checkboxArray.item(i).checked = false;
        }
        else if(!checkboxArray.item(i).checked){
            checkboxArray.item(i).checked = true;
        }
    }
}


function showMessage() {
    var arr = document.getElementsByName("hobby");
    var message = "";
    for (var i = 0; i < arr.length; i++) {
        message += arr.item(i).value+"\n";
    }
    confirm(message);
    alert(message);
}


