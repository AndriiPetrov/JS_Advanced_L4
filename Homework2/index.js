window.onload = function(){
    var error = document.getElementById("error");
    var success = document.getElementById("succsess");
    success.style.display = "none";
    error.style.display = "none";
    document.getElementById("enter").onclick = function(){
        var inputs = document.getElementsByName("autoriz");
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value.length == 0){
                inputs[i].style.backgroundColor = "red";
                error.style.display = "block";
                success.style.display = "none";
            }
            else if(inputs[i].value =="admin" && inputs[i+1].value == "12345"){
                inputs[i].style.backgroundColor = "greenellow";
                success.style.display="block";
            }
            else{
                inputs[i].style.backgroundColor = "green";
                error.style.display = "none";
            }
        }
    }
}