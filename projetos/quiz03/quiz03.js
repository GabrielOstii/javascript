let titulo = document.querySelector('#titulo')

let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let questao = document.querySelector('.questao')

let nQuestao = document.querySelector('#nQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

titulo.textContent = 'Quiz 3.0 com JSON'
let totalDeQuestoes = 0
numero.textContent = 1

let pontos = 0
let placar = document.querySelector('.placar')

let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

//ENDERECO DO ARQUIVO JSON
const url = 'data.json'

function pegarDados(i) {
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        if(data.erro) {
            console.log('Erro ao acessar o JSON')
            return
        }

        let qtdQuestoes = (data.questoes.length) - 1
        total.textContent = parseInt(qtdQuestoes)

        atribuirDados(data, i)
    })
}

function atribuirDados(data, i) {
    if(i >= data.questoes.length) {
        console.log('Fim das questoes')
        i = 1
    }
        nQuestao.textContent = data.questoes[i].numQuestao
        pergunta.textContent = data.questoes[i].pergunta

        a.textContent = data.questoes[i].alternativaA
        b.textContent = data.questoes[i].alternativaB
        c.textContent = data.questoes[i].alternativaC
        d.textContent = data.questoes[i].alternativaD

        numero.textContent = data.questoes[i].numQuestao

        let certa = document.querySelector('#correct')
        certa.value = data.questoes[i].correta

}

//COMECAR O QUIZ
let questaoAtual = 1
pegarDados(1)

function proximaQuestao(numQuestao) {
    let proxima = parseInt(numQuestao)
    pegarDados(proxima)
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value

    let repostaEscolhida = resposta.textContent

    pegarDados(numeroDaQuestao)

    let respostaCorrect = correct.value

    if(repostaEscolhida == respostaCorrect) {
        somAcerto.play()
        pontos += 10
    } else {
        console.log('Errou')
        somErro.play()
    }

    quantidadeDeQuestoes = parseInt(total.textContent)

    proxima = parseInt(numero.textContent) + 1

    setTimeout(function() {
        if (proxima > quantidadeDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 50);

    atualizarPlacar()

}
  
function atualizarPlacar() {
    placar.textContent = pontos
}

function fimDoJogo() {
    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = 'Fim de jogo! Você conseguiu ' + pontos + ' ponto'+ s

    instrucoes.classList.add('placar')

    questao.style.display = 'none'

    setTimeout(function () {
        pontos = 0
        instrucoes.classList.remove('placar')

        questao.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e depois clique na respota'
    }, 8000)
}