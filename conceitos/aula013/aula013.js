let carros = ['Fusca', 'Brasília', 'Gurgel'];

// FOR = para faça, enquanto
/* i = iterador, interação ou index */

for (let i = 0; i < 5; i++) {
    document.write(i + ' ')
};

document.write ('<hr/>');
//

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
};

document.write ('<hr/>');
//

let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia'];

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
}) 

document.write ('<hr/>');
// 

carros.forEach(function(carros) {
    document.write(`${carros} <br>`)
})

// WHILE = enquanto

let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ //contador + 1
}

console.log(contador)

//

// DO WHILE = faça enquanto

let iterador = 0;

do {
    console.log(carros[iterador])
    iterador++
} while (iterador < carros.length)

console.log(iterador)