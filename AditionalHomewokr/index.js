var button = document.getElementsByTagName("input")[0];

var count = 0;
button.onclick = function(){
    var div = document.getElementsByTagName("div");
    // if(div[count - 1].style.backgroundColor == "red"){
    //     div[count - 1].style.backgroundColor = "green";
    // }
    
    div[count++ % div.length].style.backgroundColor = "red";

    div[(count - 2) % div.length].style.backgroundColor = "green";

}