let botaoAdicionar = document.querySelector('#adicionar-pedido')
botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#adicionar-pedido')

    let pedido = getValueForm(form)

    adicionaPedidoNaTabela(pedido)

})

function adicionaPedidoNaTabela(pedido) {
    let pedidoTr = montarTr(pedido)
    let tabela = document.querySelector('#tabela-pedido')

    tabela.appendChild(pedidoTr)
}

function montarTr(pedido) {
    let pedidoTr = document.createElement('tr')
    pedidoTr.classList.add('pedido')

    pedidoTr.appendChild(montarTd(pedido.nome, 'info-nome'))
    pedidoTr.appendChild(montarTd(pedido.sabor, 'info-sabor'))
    pedidoTr.appendChild(montarTd(pedido.data, 'info-data'))
    pedidoTr.appendChild(montarTd(pedido.hora, 'info-hora'))

    return pedidoTr
}

function montarTd(dado, classe) {
    //criando um elemeto td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function getValueForm(form){
    let pedido = {
        nome: form.nome.value,
        sabor: form.sabor.value,
        data: form.data.value,
        hora: form.hora.value,
    }
    return pedido
}
