function getRandomColor() {
    var divs = document.getElementsByTagName("div");
    var color = ["red", "green", "yellow"];

    var x = getRandom(0, 2)
    // alert(x);
    divs[0].style.backgroundColor = color[x];
    if (x == 0) {
        color.splice(0, 1);
    }
    else if (x == 1) {
        color.splice(1, 1);
    }
    else {
        color.splice(2, 1);
    }

    var y = getRandom(0, 1)
    divs[1].style.backgroundColor = color[y];
    if (y == 0) {
        color.splice(0, 1);
    }
    else {
        color.splice(1, 1);
    }

    var z = color[0];
    divs[2].style.backgroundColor = z;
}

setInterval(getRandomColor, 1000);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
