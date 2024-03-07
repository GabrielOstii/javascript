export class ListaPessoas {
    constructor(lista=[]) {
        this._pessoas = lista
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    remove(id) {
        this._pessoas.splice(id, 1)
    }

    atualiza(id, pessoaAtualizada) {
        this._pessoas[id] = pessoaAtualizada
    }

    //Utilizaremos programação defensiva para retornar uma copia do array como segurança
    //usando o concat(concatenar)

    get pessoas() {
        return [].concat(this._pessoas)
    }
}