import { View } from "./View.js"

export class MensagemView extends View {
     
    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        //se tiver = ? 
        //se não tiver :
        console.log(model.texto)
        return model.texto ? `<p class='alert alert-success'>${model.texto}</p>` : '<p></p>'
    }

    update(model) {
        this._elemento.innerHTML = this.template(model)

        setTimeout(() => this._elemento.innerHTML = '', 3000)
    }

}