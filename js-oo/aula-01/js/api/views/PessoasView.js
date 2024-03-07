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
                        <th>ID</th>
                        <th>Nome<th/> <th>Idade<th/> <th>Peso<th/> <th>Altura<th/> <th>IMC<th/> <th>Situação<th/>
                    </tr>
                </thead>
                <tbody>
                    ${model.pessoas.map((pessoa, indice) => {
                        return `
                            <tr>
                                <td>${indice}</th>
                                <td>${pessoa._nome}<td/>
                                <td>${pessoa._idade}<td/>
                                <td>${pessoa._peso}<td/>
                                <td>${pessoa._altura}<td/>
                                <td>${pessoa._imc}<td/>
                                <td>${pessoa._classificacao}<td/>
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