
//Criar Objeto
let pessoa = {
    nome    : 'Gabriel',
    idade   : 19,
    peso    : 68.9,
    altura  : 1.75,
    doador  : false,
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

//como acessar uma propriedade usando
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

//Acessar propriedade usando ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

//Operacao IMC = peso / (altura * altura)

let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//.toFixed(2)
// Limita o numero de casas decimais
console.log ('IMC ' + imc.toFixed(2))

//Alterar/Atualizar Valor de propriedade
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

//Adicionar coiando utilizando o spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

//Usando spreed operator em objetos const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [carros.ano, 1979]

