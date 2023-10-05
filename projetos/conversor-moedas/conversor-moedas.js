let valorDigitado = document.querySelector('#valorReal');
let moedaSelecionada = document.getElementsByName('moedaEstrangeira'); //Lista 'Array' de elementos
let aviso = document.querySelector('#aviso')

let btnConverter = document.querySelector('#btnConverter');
let btnLimpar = document.querySelector('#btnLimpar');

let valorDolar = 5.31
let valorEuro  = 6.23
let valorLibra = 7.26
let valorBiticoin = 229762.85
let valorReal  = 0

let moedaEstrangeira = ''
let moedaConvertida =  ''

function mensagemFormatada(moedaConvertida) {
    isNaN(valorReal) ? valorReal = 0 : ''
    console.log('Moeda Convertida ' + moedaConvertida)
    aviso.textContent = 'O valor ' + (valorReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + ' covertido em ' + moedaEstrangeira + ' é ' + moedaConvertida
}

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

btnConverter.addEventListener('click', function(){
    valorReal = parseFloat(valorDigitado.value) //parseFloat para converter para Float e sair da String

    console.log('Escolha uma tipo de moéda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) { // se a moedaSelecionada esta checada(Marcada)
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    switch (moedaEstrangeira){
        case 'Dólar' :
            moedaConvertida = valorReal / valorDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency:'USD'}))
        break

        case 'Euro' :
            moedaConvertida = valorReal / valorEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency:'EUR'}))
        break
        
        case 'Libra' :
            moedaConvertida = valorReal / valorLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', {style:'currency', currency:'GBP'}))
        break

        case 'Bitcoins' :
            moedaConvertida = valorReal / valorBiticoin
            mensagemFormatada(parseFloat(moedaConvertida.toFixed(5)))
        break
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : '' //verificação
})

btnLimpar.addEventListener('click', function() {
    bloquearBotao()
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    //btnConverter.style.background = '#ccc'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})