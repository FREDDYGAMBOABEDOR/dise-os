let input = document.getElementById("input");
let uptade = document.getElementById("uptade");

input.addEventListener ("keyup", function(event){
    if (event.getModifierState("CapsLock")){
        uptade.style.display= "block";

    }else{
        uptade.style.display= "none";
    }
})