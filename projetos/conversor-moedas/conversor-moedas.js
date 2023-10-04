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
    aviso.textContent = 'O valor ' + (valorReal.toLocaleString('pt-BR'), {style: 'currency', currency: 'BRL'}) + ' covertido em ' + moedaEstrangeira + ' é ' + moedaConvertida
}

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '')
}