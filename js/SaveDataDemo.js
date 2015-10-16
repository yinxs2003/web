/**
 * Created by yinxuesong on 1/10/15.
 */
function DataSave(id){
    var target = document.getElementById(id);
    var str = target.value;
    sessionStorage.setItem("words",str);
}

function DataRead(id){
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("words");
    target.innerHTML=msg;
    //alert(msg);
}

function localStorage(){
    var storage = window.localStorage;
    for(var i=0,len = storage.length ; i<len ; i++){
        var key = storage.key(i);
        var value = storage.getItem(key);
        console.log(key+"="+value);
    }
}