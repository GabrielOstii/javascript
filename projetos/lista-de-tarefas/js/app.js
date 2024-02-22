'use strinc'

//array representa banco de dados
let banco = []

//armazena em constante array funcition que retorna os valores da chave 'todoList' 'PEGAR'
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? []

//armazena em constante array funcition que define um valor da chave 'tarefa' do nosso 'todoList' 'ALTERAR'
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))

//verifica oq tem no array de objetos que representa nosso 'banco' local
//console.log (JSON.parse.setItem('todoList', JSON.stringify(banco)))

//CRIAR ITEM NA NOSSA LISTAGEM DE TAREFAS (label + definir class + criar input com checkbox e botao)
const criarItem = (tarefa, status, indice) => {
    //criar label
    const item = document.createElement('label')

    //adicionar class 'todo_item' ao label
    item.classList.add('todo__item')

    //definir no conteudo do label input checkbox div com texto da tarefa e input button
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    //definir o novo item como filho do nosso todoList (div)
    document.getElementById('todoList').appendChild(item)
}

//LIMPAR TAREFAS
//para evitar insercao duplica da lista toda quando chamados a funcao atualizaTela() 

const limparTarefas = () => {
    //elemento todoList que eh a nossa lista
    const todoList = document.getElementById('todoList')

    // enquanto todoList tiver um primeiro filho
    // remova ultimo filho que foi adicionado ao todoList
    // lembrando que a lista eh readiconada a cada nova insercao
    while (todoList.firstChild) {todoList.removeChild(todoList.lastChild)}
}

//ATUALIZA TELA, limpar tela, pegar o 'banco' e criarItem atualizando assim a lista de tarefas
const atualizarTela = () => {
    limparTarefas()
    const banco = getBanco()
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice))
}

//INSERT ITEM NA LISTA DE TAREFAS apos teclar Enter
const inserirItem = (evento) => {
    // pegar evento teclar e armazernar na constante tecla
    const tecla = evento.key

    // pegar o valor (nome) da tecla que foi pressionada (alvo do evento)
    const texto = evento.target.value

    // se a tecla pressionada foi Enter
    if(tecla === 'Enter') {
        // pegue o banco
        const banco = getBanco()

        // faça um push (adicione) de chave/valor da tarefa e status
        banco.push ({'tarefa': texto, 'status': ''})

        // coloque a chave/valor no banco
        setBanco(banco)

        // atualiza a tela
        atualizarTela()

        //limpe o value do envenda da ultima tarefa digititada no input
        evento.target.value = ''
    }
}

//REMOVER item por indice
const removerItem = (indice) => {
    // pegue o banco
    const banco = getBanco()

    //faca um splice (corte) no seu (banco que eh um array) do indice, se uma posicao
    banco.splice (indice, 1)

    //set do splice no seu banco, permitir a persistencia dos dado
    setBanco(banco)

    // atualiza a tela
    atualizarTela()
}

//ATUALIZAR ITEM OU ALTERAR status para checked ou tirar checked
const atualizarItem = (indice) => {
    const banco = getBanco()
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''
    setBanco(banco)
    atualizarTela()
}

//O QUE FAZER QUANDO CLICAMOS EM UMA TAREFA, por meio do evento click
const clickItem = (evento) => {
    //selecionar o elemento tarefa e pegar o evento relativo a ele
    const elemento = evento.target

    //se for um click no botão x iremos remover a tarefa da listagem
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice
        removerItem(indice)
    //se não for um click no botao checkbox iremos definir como checado ou vice-versa
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
    console.log(elemento.type)
}

//adicionar escutadores de eventos de tecla pressionada e de click
document.getElementById('newItem').addEventListener('keypress', inserirItem)
document.getElementById('todoList').addEventListener('click', clickItem)

atualizarTela()
