function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function getNumber(){
// window.onload = function(){
    var div = document.getElementsByTagName("div")[0];

    document.getElementById("btn").onclick = function(){
        var input = parseInt(document.getElementById("input").value);

        var numberSite = getRandomInt(1, 100);

        if(input > numberSite){
            div.innerHTML = "Your number is bigger than conceived";
            div.style.backgroundColor = "orange";
        }
        else if(input < numberSite){
            div.innerHTML = "Your number is smaller than conceived";
            div.style.backgroundColor = "yellow";
        }
        else{
            div.innerHTML = "Congratulation";
            div.style.backgroundColor = "green";
        }
    }
// }
// }

// getNumber();