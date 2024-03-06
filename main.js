function abrirJogo() {
    var display = document.getElementById("main-content").style.display;
    if (display == "none") {
        document.getElementById("main-content").style.display = "flex";
        console.log("none!")
    } else {
        console.log("flex!")
        document.getElementById("main-content").style.display = "none";
        document.getElementById("wrapper-display").style.display = "block";
    }
}