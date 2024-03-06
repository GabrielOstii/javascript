import { View } from "./View.js"

export class PessoasView extends View {

    constructor(elemento) {
        super(elemento)
    }

    //map e join pesquise
    template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome<th/> <th>Idade<th/> <th>Peso<th/> <th>Altura<th/> <th>IMC<th/> <th>Situação<th/>
                    </tr>
                </thead>
                <tbody>
                ${model.pessoas.map(pessoa => {
                    return `
                        <tr>
                            <td>${pessoa.nome}<td/>
                            <td>${pessoa.idade}<td/>
                            <td>${pessoa.peso}<td/>
                            <td>${pessoa.altura}<td/>
                            <td>${pessoa.imc}<td/>
                            <td>${pessoa.classificaImc()}<td/>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    /*
    pegando da classe mãe
    update(model) {
        this._elemento.innerHTML = this._template(model)
    }
    */
}