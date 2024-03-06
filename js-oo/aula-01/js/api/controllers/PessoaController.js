import { Pessoa } from "../models/Pessoa.js";
import { ListaPessoas } from "../models/ListaPessoas.js";

import { Mensagem } from "../models/Mensagem.js";
import { MensagemView } from "../views/MensagemView.js";
import { PessoasView } from "../views/PessoasView.js";

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

        //criar lista
        this._listaPessoas = new ListaPessoas()

        //mensagem
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)

        //View de Pessoas
        this._pessoasView = new PessoasView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)
    }

    adiciona(event) {
        event.preventDefault()

        //criar uma pessoa
        //this._criaPessoa()
        //console.log(this._criaPessoa())

        //adicionar nova pessoa na lista
        this._listaPessoas.adiciona(this._criaPessoa())
        console.log(this._listaPessoas.pessoas)

        //definir e atualizar a mensagem
        this._mensagem.texto = 'Pessoa cadastrada com sucesso!'
        this._mensagemView.update(this._mensagem)

        //atualização da tela
        this._pessoasView.update(this._listaPessoas)
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
}