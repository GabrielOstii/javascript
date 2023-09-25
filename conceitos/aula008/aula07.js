//DOM 

//.querySelector()
/*
Entre () se informa o documento que deseja trabalhar via tag, #id ou .class (Somente seleciona 1)
*/ 

//.querySelectorAll()
/*
Entre () se informa o documento que deseja trabalhar via tag, #id ou .class (Todos elementos)
*/ 

let titulo = document.querySelector('h1')

//.textContent
/* Acessa e pode alterar o conteudo do HTML */

titulo.textContent = 'DOM'

let testando = document.querySelectorAll('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)

// testando[0].textContent = 'texto qualquer'

//Outros Metodos
/* 
Não são necessarios sinalizar o tipo
.getElementsByTagName()
.getElementsById()
.getElementsByClassName()
*/

let testeTag = document.getElementsByTagName('div')


let testeId = document.getElementById('titulo')


let testeClass = document.getElementsByClassName ('box')