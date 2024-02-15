// carrosel
let ulsElis = document.querySelectorAll('ul li')
//console.log(ulsElis)

let qtdItens = ulsElis.length
console.log('Quant. lis = ' + qtdItens)

let numDeItens = 6

//... Criar mais conforme as listas
let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')

let numDeVideos = document.querySelectorAll('.numDeVideos')

numDeVideos[0].textContent = lista1.length
numDeVideos[1].textContent = lista2.length

function show(indice, indicelista) {
    let n = indice
    numDeItens = numDeItens + indice
    console.log(n + ' ' + numDeItens)

    // transforma o #lista em lista mais o numero da lista
    let listaUl = document.querySelector('#lista' + indicelista)

    let mover = 100
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        //0 é o Y
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }
}