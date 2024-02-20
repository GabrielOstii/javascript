/*GabiFlix*/

let divAviso = document.querySelector('#aviso')

let ulsElis = document.querySelectorAll('ul li')

let numDeItens = 5

//Botão para ir pro lado
function show(indice, indiceLista) {
    let listaUl = document.querySelector('#lista' + indiceLista)

    let mover = 100
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) listaUl.scrollBy(posicaoXDireita, 0)
    
    if(indice == -1) listaUl.scrollBy(posicaoXEsquerda, 0)
}

//Modal
let iframeVideo = document.querySelector('#iframeVideo')

function abrirModal(videoId){
    location.href="#abrirModal"
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}

//JSON
const url = 'videos.json'

function pegarDados() {
    fetch(url)
    .then( response => response.json() )
    .then( dados => {
        console.log(dados)
        //Quantidade de videos
        let qtdDeVideosJson = dados.videos.length
        console.log('Quantidade de Videos JSON '+ qtdDeVideosJson)

        let qtdDeCategorias = dados.categorias.length
        console.log('Quantidade de Categorias JSON '+ qtdDeCategorias)
    })
}

/*
let ul1 = document.querySelector('#lista1')
let ul2 = document.querySelector('#lista2')
*/


function pegarDadosPorCategoria(categoriaId, lista) {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
        let quantDeVideos = dados.videos.length
        let quantDeCategorias = dados.categorias.length
        
        let indiceAtual = categoriaId - 1

        if(indiceAtual < quantDeCategorias) {
            let titulosCategorias = document.querySelectorAll('.tituloCategoria')
            titulosCategorias[indiceAtual].textContent = dados.categorias[indiceAtual].titulo
        }

        for(let y = 0; y < quantDeVideos; y++) {
            if(dados.videos[y].categoriaId == categoriaId) {
                criarLiImg(categoriaId, dados.videos[y].videoId, lista)
            }
        }
    })
}

/*
function rodarDadosCategoria() {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
        let quantDeCategorias = dados.categorias.length

        let ul = []
        for (let i = 0; i <= quantDeCategorias; i++) {
            ul.push(document.querySelector(`#lista${i}`))
        }

        for(let x = 0; x <= quantDeCategorias; x++){
            pegarDadosPorCategoria(x, ul[x])
        }
    })
} 
rodarDadosCategoria()
*/
/*
pegarDadosPorCategoria(1, ul1)
pegarDadosPorCategoria(2, ul2)
*/
/*
function dadosPorCategoria(categoria) {
    console.log(categoria)
}
*/

function criarLiImg(categoriaId, idVideo, nLista) {
    let lista = nLista

    let item = document.createElement("li")
    lista.appendChild(item)

    let imagem = document.createElement('img')
    imagem.setAttribute('src', `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`)
    imagem.setAttribute('class', 'capa-thumb')
    imagem.setAttribute('onClick', `abrirModal("${idVideo}")`)
    item.appendChild(imagem)

}


function criarCategoria(id) {

    let section = document.getElementById("conteudos");
    let div = document.createElement("div");
    section.appendChild(div); 

    let h3 = document.createElement('h3');
    h3.setAttribute('class', 'tituloCategoria');
    div.appendChild(h3); 

    let article = document.createElement('article');
    article.setAttribute('class', 'categoria');
    div.appendChild(article); 

    let btnPrev = document.createElement('button');
    btnPrev.setAttribute('id', 'btnPrev');
    btnPrev.setAttribute('onclick', `show(+1, ${id})`);
    btnPrev.innerHTML = '&lt;';
    div.appendChild(btnPrev); 

    let ul = document.createElement('ul');
    ul.setAttribute('id', `lista${id}`);
    ul.setAttribute('class', 'videos');
    div.appendChild(ul); 

    let btnNext = document.createElement('button');
    btnNext.setAttribute('id', 'btnNext');
    btnNext.setAttribute('onclick', `show(-1, ${id})`);
    btnNext.innerHTML = '&gt;'; 
    div.appendChild(btnNext); 
} 

function main() {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
        let quantDeCategorias = dados.categorias.length

        for (let y = 0; y < quantDeCategorias; y++) {
            let idAtual = dados.categorias[y].id
            if(idAtual > quantDeCategorias) {
                console.log('Categorias criadas')
            } else {
                criarCategoria(idAtual)
            }
        }

        let ul = []
        for (let i = 1; i <= quantDeCategorias; i++) {
            ul.push(document.querySelector(`#lista${i}`))
        }

        for(let x = 0; x <= quantDeCategorias; x++){
            let y = x + 1
            pegarDadosPorCategoria(y, ul[x])
        }
        
    })
}
/*


//let numDeListas = document.querySelectorAll('.categoria').length

let lista = [];
for(let x = 1; x <= numDeListas; x++){
    lista[x] = document.querySelectorAll('#lista'+x+' li')
}

let numDeVideos = document.querySelectorAll('.numDeVideos')

for(let y = 0; y < numDeListas; y++){
    numDeVideos[y].textContent = lista[y+1].length
}
*/

