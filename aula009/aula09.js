let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', './imagens/pride-fc.jpg')
imagem.setAttribute('width', '250px')


// titulo.style.color = 'red';
// Quando for palavra composta o atributo usar camelCase

document.querySelector('h1').style.color = 'red'
titulo.style.backgroundColor = '#000';
titulo.style.borderBottom = '2px solid red';
titulo.style.padding = '0.625rem';
titulo.style.borderRadius = '5px';

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
box[0].removeAttribute('class')

// Modos de Cor

let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector ('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight () {
    console.log('modo light')
    tela.classList.remove('dark')
    tela.classList.add('light')
}