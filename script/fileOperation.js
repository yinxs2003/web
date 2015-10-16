/**
 * Created by yinxuesong on 28/9/15.
 */

//读取文件
function handleFileSelect(evt) {
var a=new Array();
    var files = evt.target.files; // FileList object
    if(files[0])
    {
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = loaded;
    }
}

function loaded(evt) {
    var fileString = evt.target.result;
    alert(fileString);
}

var btn=document.getElementById('file');
btn.addEventListener('change', handleFileSelect, false);

//保存文件
function doSave(value, type, name) {
    var blob;
    if (typeof window.Blob == "function") {
        blob = new Blob([value], {type: type});
    } else {
        var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
        var bb = new BlobBuilder();
        bb.append(value);
        blob = bb.getBlob(type);
    }
    var URL = window.URL || window.webkitURL;
    var bloburl = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    if ('download' in anchor) {
        anchor.style.visibility = "hidden";
        anchor.href = bloburl;
        anchor.download = name;
        document.body.appendChild(anchor);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        anchor.dispatchEvent(evt);
        document.body.removeChild(anchor);
    } else if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, name);
    } else {
        location.href = bloburl;
    }
}

var a=new Array();
for(var i=0;i<10;i++)
    a.push(i);

function Save(){
    doSave(a, "text/latex", "hello.txt");
}