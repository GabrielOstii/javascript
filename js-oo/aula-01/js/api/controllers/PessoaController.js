import { Pessoa } from "../models/Pessoa.js";
import { ListaPessoas } from "../models/ListaPessoas.js";

//import { Mensagem } from "../models/Mensagem.js";
//import { MensagemView } from "../views/MensagemView.js";

import { Modal } from "../models/Modal.js";
import { ModalView } from "../views/ModalView.js";

import { PessoasView } from "../views/PessoasView.js";
import { PessoasRepository } from "../repositories/PessoasRepository.js";

//Classe de ações
export class PessoaController {

    //atributos, propriedades
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    //metodos

    //construtor
    constructor () {
        this._inputNome     = document.querySelector('#nome')
        this._inputIdade     = document.querySelector('#idade')
        this._inputPeso     = document.querySelector('#peso')
        this._inputAltura     = document.querySelector('#altura')

        //Repositorio
        this._pessoasRepository = new PessoasRepository()
        console.log(this._pessoasRepository)
        let lista = this._pessoasRepository.ler()
        console.log(lista)

        //criar lista
        this._listaPessoas = new ListaPessoas(lista)

        //View de Pessoas
        this._pessoasView = new PessoasView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)

        //mensagem
        /*
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)
        */
        
        //modal
        this._modal = new Modal()
        this._modalView = new ModalView(document.querySelector('#mensagemModal'))
        this._modalView.update(this._modal)
    }

    adiciona(event) {

        event.preventDefault()
        const id = document.querySelector('#idPessoa').value

        if(!id) {
            console.log('Não tem ID ' + id)

            //criar uma pessoa
            //this._criaPessoa()
            //console.log(this._criaPessoa())

            //adicionar(cria) nova pessoa na lista
            const pessoaAdd = this._criaPessoa()
            this._listaPessoas.adiciona(pessoaAdd)
            //console.log(this._listaPessoas.pessoas)

            this._pessoasRepository.criar(pessoaAdd)
            //atualização da tela
            this._pessoasView.update(this._listaPessoas)

            //definir e atualizar a mensagem
            /*
            this._mensagem.texto = 'Pessoa cadastrada com sucesso!'
            this._mensagemView.update(this._mensagem)
            */

            //modal
            this._modalView.update(this._modal)
            
        } else {
            console.log('ID => ' + id)
            this.atualiza(id)
        }

    }

    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limparFormulario() {
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }

    preencheFormulario (nome, idade, peso, altura) {
        this._inputNome.value = nome
        this._inputIdade.value = idade
        this._inputPeso.value = peso
        this._inputAltura.value = altura
    }

    apaga(id) {
        console.log('id a ser apagado ' + id)
        if(!id) {
            console.log('ID não foi informado')
            return
        }
        //if(id) {
            console.log('ID '+ id)
            this._listaPessoas.remove(id)
            this._pessoasView.update(this._listaPessoas)

            this._pessoasRepository.apagar(id)
            console('PessoaController Apagou')
        //}
    }

    atualiza(id) {
        let pessoaAtualizada = this._criaPessoa()
        console.log(pessoaAtualizada)

        this._pessoasRepository.atualizar(id, pessoaAtualizada)
        console.log('Atualizou repositorio')

        this._listaPessoas.atualiza(id, pessoaAtualizada)
        console.log('Atualizou repositorio')

        this._listaPessoas.atualiza(this._listaPessoas)
        document.querySelector('#idPessoa').value = null
    }

    buscaPorId(id) {
        let pessoaEncontrada = this._pessoasRepository.lerPorId(id)
        return pessoaEncontrada
    }
}