var div = document.getElementById("div1");
var positionX = 0;
var positionY = 0;

var up = document.getElementsByName("up")[0].onclick = function(){
    div.style.top = (positionX-=20) + "px";
}
var left = document.getElementsByName("left")[0].onclick = function(){
    div.style.left = (positionY-=20) + "px";
}
var right = document.getElementsByName("right")[0].onclick = function(){
    div.style.left = (positionY+=20) + "px";
}
var bottom = document.getElementsByName("bottom")[0].onclick = function(){
    div.style.top = (positionX+=20) +"px";
}