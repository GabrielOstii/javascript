import { PessoaController } from './api/controllers/PessoaController.js'
import { ModalHelper } from './api/helpers/ModalHelper.js'

const pessoaController = new PessoaController()

// CONTROLAR ENVIO DO FORMULARIO E EXIBICAO NA TABELA

let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {

    //adicionar pessoa
    pessoaController.adiciona(event)

    ModalHelper.ocultarBotoes()
    ModalHelper.modal('Cadastro', 'Pessoa cadastrada ou atualizada!')

    pessoaController._limparFormulario()
})

//formulario formApagar
const formApagarEditar = document.querySelector('#formApagarEditar')
const btnApagar = document.querySelector('#btnApagar')
const btnEditar = document.querySelector('#btnEditar')

formApagarEditar.addEventListener('submit', (event) => {
    event.preventDefault()
})

btnApagar.addEventListener('click', () => {
    let id = document.querySelector('#id').value
    console.log('Apagar registro ' + id)

    document.querySelector('#id').value = null

    //Interações com a janela modal
    ModalHelper.mostrarBotoes()
    //abrir modal
    ModalHelper.modal('Apagar registro', `Deseja apagar o registro ${id} ?`)

    //botao sim
    document.querySelector('#sim').addEventListener('click', () => {
        pessoaController.apaga(id)
        id = null // Apagar o ID importante
        ModalHelper.closeModal()
    })
})

btnEditar.addEventListener('click', () => {
    
    //rolar para cima
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#nome').focus()

    let id = document.querySelector('#id').value

    console.log('Editar registro ' + id)

    document.querySelector('#idPessoa').value = id
    document.querySelector('#id').value = null

    let pessoa = pessoaController.buscaPorId(id)

    if(pessoa) {
        //desentruturação
        let { _nome, _idade, _peso, _altura} = pessoa

        pessoaController.preencheFormulario(_nome, _idade, _peso, _altura)
    }
})

//Controles do modal

ModalHelper.fecharJanela()



//Antiga forma

//classes = são modelos ou moldes de objetos
//objetos = são abstrações ou representações de 'coisas' que existem no mundo
//objeto = instância ou objeto do tipo | objeto é um tipo de dados



// criar novo objeto a partir da class ou instanciar + atribuição de dados

/*
let pessoa1 = new Pessoa('Gabriel', 20, 70.1, 1.76)
let pessoa2 = new Pessoa('Adelman', 53, 89.5, 1.91)

console.log('Nome ' + pessoa1.nome)
console.log('Idade ' + pessoa1.idade)
console.log('Imc ' + pessoa1.imc)
console.log('Peso ' + pessoa1.peso)

pessoa1.nome = 'Gabriel Carlos'
pessoa1.idade = 21
pessoa1.peso = 90.5

console.log('Nome ' + pessoa1.nome)
console.log('Idade ' + pessoa1.idade)
console.log('Peso ' + pessoa1.peso)
console.log('Situação: ' + pessoa1.classificaImc())
console.log('Total de pessoas criadas: ' + Pessoa.totalPessoas)
*/


// atribuir valores aos atributos de um objeto

//pessoa1._nome = 'Gabriel'
//pessoa1._idade = '20'
//pessoa1._peso = '70.0'
//pessoa1._altura = '1.76'

//pessoa2._nome = 'Howstinn'
//pessoa2._idade = '19'
//pessoa2._peso = '90.5'
//pessoa2._altura = '1.85'
/*
console.log(pessoa1)
console.log(pessoa2)*/