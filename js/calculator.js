function cal(string){
    if(string=="AC"){//输入的清零
        document.getElementById("result").value = "";
    }
    if(!isNaN(string)){
        alert(string +"是数字");
    }

}