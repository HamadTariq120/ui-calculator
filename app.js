function getnumber(num){
    var clearresult=document.getElementById("clearresult")
clearresult.value +=num;
}

function clear1(){
    var clearresult=document.getElementById("clearresult")

    clearresult.value= ""
}
 
function getresl(){
    var clearresult=document.getElementById("clearresult")
    clearresult.value=eval(clearresult.value)

}