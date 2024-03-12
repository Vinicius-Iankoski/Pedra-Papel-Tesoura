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
let primeiroClick = true; // serve para travar o forEach para apenas um click
divs.forEach(function (item) {
    item.addEventListener('click', function () {
        if (primeiroClick) {
            //testezin
            this.classList.toggle('divTeste');
            this.classList.toggle("divsClicked");
            console.log("clicado!");
            // variaveis
            let pedra = document.getElementById("pedra");
            let papel = document.getElementById("papel");
            let tesoura = document.getElementById("tesoura");

            pedra.style.gridRow = 3;
            papel.style.gridRow = 3;
            tesoura.style.gridRow = 3;
            primeiroClick = false;
        }
    });
});


// funcao para guardar a escolha do jogador
function guardarEscolha() {

}