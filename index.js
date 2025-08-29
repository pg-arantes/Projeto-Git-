var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var seta_direita = window.document.getElementById("seta-direita")
var seta_esquerda = window.document.getElementById("seta-esquerda")

function rolar_direita() {

    leonardo.style = "display: none"
    bruna.style = "display: flex"
    seta_direita.style = "display: none"
    seta_esquerda.style = "display: flex; margin-top: 55px"
}

function rolar_esquerda() {

    leonardo.style = "display: flex"
    bruna.style = "display: none"
    seta_direita.style = "display: flex; margin-top: 55px"
    seta_esquerda.style = "display: none"
}
