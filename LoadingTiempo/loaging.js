let counts = setInterval(updated,40)
let upto = 0;

function updated(){
    const count = document.getElementById("counter")
    ++upto;

    count.innerText = "loading " + upto + "%";
    if(upto==100){
        clearInterval(counts);
        count.innerText = "DONE";
    }
}