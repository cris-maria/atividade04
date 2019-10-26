const adicionar = document.getElementById('add');
adicionar.addEventListener('click', () => adicionar_linha());

const remover = document.getElementById('rem')
remover.addEventListener('click', () => remover_linha());


function adicionar_linha() {
    let tabela = document.getElementById('mytable');
    let linha = tabela.insertRow();
    let primeira = linha.insertCell(0);
    let segunda = linha.insertCell(1);
    let terceira = linha.insertCell(2);

    primeira.innerHTML = "Patricia";
    segunda.innerHTML = "1992";
    terceira.innerHTML = "27";
}

function remover_linha() {
    document.getElementById('mytable').deleteRow(2);
}