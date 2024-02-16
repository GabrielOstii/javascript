// carrosel
let ulsElis = document.querySelectorAll('ul li')
//console.log(ulsElis)

//cada lista é uma categoria
let numDeListas = document.querySelectorAll('ul').length


//quant total de lis de todas as listas
let qtdVideos = ulsElis.length
console.log('Quant. Videos = ' + qtdVideos)

let numDeItens = 5 // Capas visiveis no carrosel

//... Criar mais conforme as listas
// Forma inteligente utilizando Arraw
let lista = [];
for(let x = 1; x <= numDeListas; x++){
    lista[x] = document.querySelectorAll('#lista'+x+' li')
}
/*
let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')
*/

let numDeVideos = document.querySelectorAll('.numDeVideos')

for(let y = 0; y < numDeListas; y++){
    numDeVideos[y].textContent = lista[y+1].length
}

/*
numDeVideos[0].textContent = lista1.length
numDeVideos[1].textContent = lista2.length
*/


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

let iframeVideo = document.querySelector('#iframeVideo')

function abrirModal(videoId){
    location.href="#abrirModal"
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}
