let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

/*Condicionais*/

/*IF*/
if (notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado'
}

/*IF ELSE*/

if (notaFinal2 >=7 ) {
    sit2.textContent = 'Aprovado(a)'
} else {
    sit2.textContent = 'Reprovado(a)'
}

/*IF TERNARIO*/

//notaFinal3 >= 7 ? sit3.textContent = 'Passou' : 'Ficou'

/* IF ENCADEADO OU ANINHADO */

if (notaFinal3 >= 7 ) {
    sit1.textContent = 'Aprovado'
} else if (notaFinal1 <= 3) {
    sit1.textContent = 'Reprovado'
} else {
    sit1.textContent = 'Recuperação'
}

/* Escolha Caso */

let situacao = ''
//situacao = 'Aprovado'
//situacao = 'Reprovado'
//situacao = 'Recupecação'

switch(situacao) {
    case 'Aprovado':
        escolha.textContent = 'Passou de ano'
        break
    
    case 'Reprovado' :
        escolha.textContent = 'Não passou de ano'
        break
    
    case 'Recuperação' :
        escolha.textContent ='Ainda tem uma chance'
        break

    default:
        escolha.textContent = 'Estude'
        //default não precisa do break
}