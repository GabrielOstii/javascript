let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

function olaMundo2() {
    return 'Olá Mundo com retorno <br>'
}

olaMundo()

document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador'

function somar(a, b) {
    document.write((a + b) + "<br>")
}

function somar2(c, d) {
    return c + d
}

somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 10)}</p>`)

//Função Anonima

titulo.addEventListener('click', function() {
    console.log('Clicou no tiutlo')
})

//Arrow Function

//const ou let

const olaMundoArrow = () => {
    document.write('Olá Mundo!!!')
}

olaMundoArrow()
