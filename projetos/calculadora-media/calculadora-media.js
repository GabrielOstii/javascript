
let formulario = document.querySelector('form');
let aviso = document.querySelector('#iAviso')

let cxNota1 = document.querySelector('#iNota1');
let cxNota2 = document.querySelector('#iNota2');
let cxMedia = document.querySelector('#iMedia');
let cxSituacao = document.querySelector('#iSituacao')

let btnCalcular = document.querySelector('#btnCalcular');
let btnLimpar = document.querySelector('#btnLimpar');

function calcMedia(n1, n2) {
    return (n1 + n2) / 2
}

function situacaoFinal(mediaFinal) {
    let sit = '';

    if (mediaFinal >= 7) {
        sit = 'Aprovado(a)';
    } else if (mediaFinal <= 3) {
        sit = 'Reprovado(a)'
    } else {
        sit = 'Recuperação'
    }
    return sit
}

function formatarSituacao (sit) {
    console.log('Situação Final' + sit);
    switch (sit) {
        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado');
            cxSituacao.classList.remove('recuperacao');
            cxSituacao.classList.add('aprovado');
            console.log('Adicionar class aprovado');
            break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado');
            cxSituacao.classList.remove('recuperacao');
            cxSituacao.classList.add('reprovado');
            console.log('Adicionar class reprovado');
            break

        case 'Recuperação':
            cxSituacao.classList.remove('aprovado');
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao');
            console.log('Adicionar class recuperacao');
            break

        default:
            console.log('Situação Indefinida')
    } 
}

function validarNumero(numero) {
    let num1 = cxNota1.value;
    let num2 = cxNota2.value;
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {

        formulario.reset()
        aviso.textContent = "Digite um nota entre 0.0 a 10.0"
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = '';
            aviso.classList.remove('alerta')
        }, 2000); //função anonima para reaizar uma função por um tempo 1000 = 1s, 2000 = 2s...
    }
}

btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')
    //Dado vem como String converta para float
    let nota1 = parseFloat(cxNota1.value);
    let nota2 = parseFloat(cxNota2.value);
    let media = calcMedia(nota1, nota2);

    console.log(nota1);
    console.log(nota2);
    console.log(media);

    if(isNaN(media) || media < 0) {
        console.log('Não é um número')
        cxSituacao.value =''
    } else {
        cxMedia.value = parseFloat(media);
        cxSituacao.value = situacaoFinal(media);
        formatarSituacao(situacaoFinal(media)); //Motivo do Erro
    }
    e.preventDefault();
})

btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado');
    cxSituacao.classList.remove('reprovado');
    cxSituacao.classList.remove('recuperacao')
})


