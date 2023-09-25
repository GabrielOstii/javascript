let produto = 'Arroz';
let quant = 2;
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario


//Formatação de Moeda
document.write (`Preço Total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`)

//

const nome = 'Gabriel Carlos'
const peso = 68.9
const altura = 1.75
const imc = peso / (altura * altura)

document.write (`IMC: ${imc} <br>`)
document.write (`IMC: ${imc.toFixed(2)} <hr>`)

//
let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = (nota1 + nota2 + nota3) / 3

document.write (`Nota Final ${notaFinal.toFixed(2)} <hr>` )

//

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(`Preço: ${compraComDesconto.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`)

document.write("Preço: " + compraComDesconto.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}) + "<hr>")