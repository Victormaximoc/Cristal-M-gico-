const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
    "Não boto muita fé.",
    "sem duvidas.",
    "Não conte com isso.",
    "Tente novamente mais tarde.",
    "A coisa mais certa que tu vai ver na vida, definitivamente.",
    "Cristalzinho disse que não.",
    "Pode confiar.",
    "Vou abafar, digo não.",
    "Rapaz agora que tu perguntou, penso que sim.",
    "As vizinhas fofoqueiras nãe falaram disso.",
    "Se pah, talvez.",
    "Consigo prever isso não.",
    "Perspectiva está ok.",
    "Não.",
    "É isso mesmo.",
    "Faz pergunta melhor.",
    "Sinais apontam que sim.",
]

// função pra clicar em fazer pergunta
function fazerPergunta() {

    if(inputPergunta.value == "") {
        alert("Faça a pergunta corno!")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gera o numero aleatorio para as variaveis 

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    // vai ser a fução que vai fazer a resposta sumir depois de 4 s
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 4000)
}