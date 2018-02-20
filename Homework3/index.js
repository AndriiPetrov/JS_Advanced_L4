var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++){

}

function getRandom(){
    return Math.floor(Math.random() *( 2 - 0 + 1)) + 0; 
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
