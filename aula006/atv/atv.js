let lutador = 'Fedor Vladimirovich Emelianenko';
let nacionalidade = 'Russo';
let idade = 44;
let peso = 106;
let altura = 1.83;

document.write (`Lutador: ${lutador} <br>`);
document.write (`Nacionalidade: ${nacionalidade} <br>`);
document.write (`Idade: ${idade} anos <br>`);
document.write (`Altura: ${peso}m <br>`);

document.write(`<h1> Frase do Dia </h1>`);

const dia = 10;
const mes = 9;
const ano = 2021;
const mensagem = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.";
const autoria = 'Aaron Swartz'

document.write(`${dia}/${mes}/${ano} <br>`);
document.write(`${mensagem} <br>`);
document.write(`${autoria} <br>`);

document.write(`<h1> Array de Meses do Ano </h1>`);

let mesesAno = ['Janeiro', 'Fevereiro', 'Março'];

document.write (`${mesesAno[0]}, ${mesesAno[1]}, ${mesesAno[2]}...`);

document.write(`<h1> Objeto Jogo </h1>`);

let jogo = {
    titulo    : 'Legue OF Legends - LOL',
    desenvolvedores :'Riot Games',
    lancamento  : 2009,
};

document.write (`Jogo: ${jogo.titulo} <br>`);
document.write (`Desenvolvido: ${jogo.desenvolvedores} <br>`);
document.write (`Ano do Lançamento: ${jogo.lancamento} <br>`);

