export class PessoasRepository {

    _getLocalStorage
    _setLocalStorage
    
    constructor() {
        this._getLocalStorage = () => JSON.parse(localStorage.getItem('db')) ?? []
        this._setLocalStorage = (db) => localStorage.setItem("db", JSON.stringify(db))
        console.log('Local Storage')
    }

    // Crud

    criar(pessoa) {
        let dbPessoa = this._getLocalStorage()

        dbPessoa.push(pessoa)
        this._setLocalStorage(dbPessoa)
    }

    ler() {
        return this._getLocalStorage()
    }

    atualizar(id, pessoaAtualizada) {
        let dbPessoa = this.ler()

        dbPessoa[id] = pessoaAtualizada
        this._setLocalStorage(dbPessoa)
    }

    apagar() {
        let dbPessoa = this.ler()

        dbPessoa.splice(id, 1)
        this._setLocalStorage(dbPessoa)
    }

    lerPorId(id) {
        const dbPessoa = this.ler()
        return dbPessoa[id]
    }

}