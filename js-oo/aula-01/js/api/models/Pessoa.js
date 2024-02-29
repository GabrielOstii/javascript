
//Classe Modelo
export class Pessoa {
    // atributos = variaveis ou carecteristicas
    // _nome = Privado
    // nome = Publico
    _nome  // String
    _idade // Integer
    _peso // Float
    _altura // Float
    _imc
    _classificacao
    static totalPessoas = 0 // atributo estatico (Ou atributo da Classe)


    // metodos = funções ou comportamentos

    //metodo construtor
    constructor (nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura).toFixed(2) //set
        this._classificacao = this.classificaImc()
        Pessoa.totalPessoas += 1 //contador de pessoas
    }

    get
    calculaImc() {
        return this.imc
    }

    classificaImc() {
        let valorImc = (this.imc).toFixed(2)
        let classificacao = ''

        if (valorImc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (valorImc <= 24.9) {
            classificacao = 'Peso normal'
        } else if (valorImc <= 29.9) {
            classificacao = 'Sobrepeso'
        } else if (valorImc <= 34.9) {
            classificacao = 'Obesidade grau I'
        } else if (valorImc <= 39.9) {
            classificacao = 'Obesidade grau II'
        } else if (valorImc <= 40) {
            classificacao = 'Obesidade grau III'
        } else {
            classificacao = 'Peso Invalido'
        }

        return classificacao
    }

    //get = pegar / acessar informação
    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }

    get imc() {
        return this._imc
    }

    get totalPessoas() {
        return Pessoa.totalPessoas
    }

    // set = alterar
    set nome(newName) {
        this._nome = newName
    }

    set idade(newIdade) {
        this._idade = newIdade
    }

    set peso(newPeso) {
        this._peso = newPeso
    }

    set altura(newAltura) {
        this._altura = newAltura
    }




}