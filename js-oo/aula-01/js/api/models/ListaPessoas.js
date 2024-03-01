export class ListaPessoas {
    constructor() {
        this._pessoas = []
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    //Utilizaremos programação defensiva para retornar uma copia do array como segurança
    //usando o concat(concatenar)

    get pessoas() {
        return [].concat(this._pessoas)
    }
}