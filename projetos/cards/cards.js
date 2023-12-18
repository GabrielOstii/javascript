//Elementos
let namePoke = document.querySelector('#name')
let img = document.querySelector('#img')
let nameSkil = document.querySelector('#nameSkills')
let descSkil = document.querySelector('#descSkills')

let secConteudos = document.querySelector('#conteudo')

const url = 'cardbase.json'

function pegarDados(i) {
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        if(data.erro) {
            console.log('Erro ao acessar o JSON')
            return
        }

        let qtdPokemons = (data.pokemons.length)
        console.log("Quant. de Pokemons " + qtdPokemons)

        atribuirDados2(data, i)
    })
}

function atribuirDados(data, i) {
    img.setAttribute('src', "img/" + data.pokemons[i].img)
    namePoke.textContent        = data.pokemons[i].namePoke
    nameSkil.textContent        = data.pokemons[i].nameSkil
    descSkil.textContent        = data.pokemons[i].descSkil
}

let namePokes = document.getElementsByClassName('name')
let imgs = document.getElementsByClassName('img')
let nameSkills = document.getElementsByClassName('nameSkills')
let descSkills = document.getElementsByClassName('descSkills')

function atribuirDados2(data, i){
    imgs[i].setAttribute('src', "img/" + data.pokemons[i].img)
    namePokes[i].textContent        = data.pokemons[i].namePoke
    nameSkills[i].textContent       = data.pokemons[i].nameSkil
    descSkills[i].textContent       = data.pokemons[i].descSkil
}

function desenharCarta(id) {
    //Card
    let carta = document.createElement('div')
    secConteudos.appendChild(carta)
    carta.setAttribute('class', 'card')
    

    //Name
    let nome = document.createElement('h1')
    carta.appendChild(nome)
    nome.setAttribute('class', 'name')
    namePoke.textContent = 'Nome'
    
    
    //Img
    let imagem = document.createElement('img')
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'img')
    imagem.setAttribute('src', "img/pikachu.jpg")

    //Skills
    let divskill = document.createElement('div')
    carta.appendChild(divskill)
    divskill.setAttribute('class', 'skills')

    //NameSkills
    let nomeSkil = document.createElement('h2')
    divskill.appendChild(nomeSkil)
    nomeSkil.setAttribute('class', 'nameSkills')
    nameSkil.textContent = 'Nomes Habilidades'

    //DescSkills
    let descSkil = document.createElement('p')
    divskill.appendChild(descSkil)
    descSkil.setAttribute('class', 'descSkills')

    pegarDados(id)
}

pegarDados(0)

desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
