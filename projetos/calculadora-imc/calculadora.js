//Selecione os elementos que deseja manipular

let formulario = document.querySelector('form');

let cxNome = document.querySelector('#inome');
let cxIdade = document.querySelector('#iidade');
let cxPeso = document.querySelector('#ipeso');
let cxAltura = document.querySelector('#ialtura');
let cxImc = document.querySelector('#iimc')

let aviso = document.querySelector('#aviso');
let dados = document.querySelectorAll('.pessoa');

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/*Para pegar os dados das caixas use a propriedade .value,
mas antes determine um evento como referencia para pegar os dados */

/* Adicionei escutador para o botão de envio */
// fuc anonima para pegar os valores
//calcular o imc

btnEnviar.addEventListener('click', function(e) { //e de Evento
    //busca
    let nome    =cxNome.value;
    let idade   =cxIdade.value;
    let peso    =cxPeso.value;
    let altura  =cxAltura.value;
    let imc     =(peso / (altura * altura)).toFixed(1);

    //pode usar o console.log para verificar as informações

    cxImc.value = imc;
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    //objeto
    let pessoa = {
        nome    :nome,
        idade   :idade,
        peso    :peso,
        altura  :altura,
        imc     :imc,
        sit     :sit,
    }

    dados[1].textContent = pessoa.nome;
    dados[2].textContent = pessoa.idade + ' anos';
    dados[3].textContent = pessoa.peso + ' Kg';
    dados[4].textContent = pessoa.altura + 'm';
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit;

    e.preventDefault();
})

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo Peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso Normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
} 




