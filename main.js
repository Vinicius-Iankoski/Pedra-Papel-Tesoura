// funcao para mudar o display da tela inicial
function abrirJogo() {
    let display = document.getElementById("main-content").style.display;
    if (display == "none") {
        document.getElementById("main-content").style.display = "flex";
        console.log("none!")
    } else {
        console.log("flex!")
        document.getElementById("main-content").style.display = "none";
        document.getElementById("wrapper-display").style.display = "grid";
    }
};

// fazer a animação CSS quando o jogador clicar em algum div
let divs = document.querySelectorAll('.divsClicked');

divs.forEach(function (item) {
    item.addEventListener('click', function () {
        // this.classList.toggle('.divTeste');
        console.log("clicado!")
    });
});


// funcao para guardar a escolha do jogador
function guardarEscolha() {

}