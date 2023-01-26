/* 

Quando o usuario clicar no botão ver Trailer, devemos abrir a modal com o video do trailer
    - Dar um jeito de pegar o elemento que represente o botão na tela usando o js
    - Dar um jeito de identificar quando o usuário clicar no botão
    - Dar um jeito de pegar o elemento da modal no js
    - Abrir a modal na tela

Quando o usuario clicar no X devemos fechar a modal
    - Dar um jeito de pegar o elemento de fechar modal usando o js
    - Dar um jeito de identificar quando o usuário clicar no X
    - Fechar a modal

*/
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal")
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})