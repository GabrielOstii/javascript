let produtos = ['Arroz', 'Feijão', 'Leite'];
var codigos = Array(10, 20, 30);

let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
meses[0] = 'Janeiro'

// Adicionar no final push = empurre
produtos.push('Açúcar');
codigos.push(40, 50, 60, 70);
meses.push('Mai', 'Jun','Ago', '07')

//Remover do final pop = estourar
produtos.pop(); 
codigos.pop();
meses.pop();

// Adicionar no inicio unshift
produtos.unshift('Uva', 'Maçã');

//Remover no inicio shift
produtos.shift();

//Remover de uma posição especifica splice
// splice =  emendar
//posicao inicial, quantos remover
codigos.splice(1, 3)

//Copiar array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

//Ver tamanho do ARRAY length comprimento
//meses.length
//meses1.length
//meses2.length

//spreed operator ... copiar e pode adicionar
let teste = [...produtos, 'Ovo', 'Pera']

//simulacao

var test = Array(10)
test[0] = 'Oi'
test[9] = "Tudo bem?"
test[10] = "Opa!"



