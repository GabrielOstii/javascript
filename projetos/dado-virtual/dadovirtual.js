
//Selecionar elementos
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    //adicionando a animação
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer')

    //Toca som
    dadoRolando.play()

    //Oculta botão
    btnSortear.computedStyleMap.display = 'none'

    //função do JS setTimeout para dar um tempinho
    setTimeout(function(){

        //Armazanar numero sorteado na variavel
        numeroSorteado = getRandomInt(1,6)

        console.log(numeroSorteado)

        //define a imagem via o numero sorteado
        imgDado.setAttribute('src' , './img/'+numeroSorteado+'.png')

        sorteado.textContent = numeroSorteado

        btnSortear.computedStyleMap.display = 'inline-block'

        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')

    }, 1750)



})


//Puxa um numero Random
//Não entendi é sobre
function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima
    max = Math.floor(max) // arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min
}