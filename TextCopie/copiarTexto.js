let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let board = navigator.clipboard;
    board.writeText(text.value)
    .then(() => {
        alert ("Text Copiado");
    })
})