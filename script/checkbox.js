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


function showContent(){
    console.log("show content");
    var checkboxArray = document.getElementsByName("hobby");
    for(var c in checkboxArray){
        if(checkboxArray[c].checked){
            console.log(checkboxArray[c].value);
        }
    }
}

