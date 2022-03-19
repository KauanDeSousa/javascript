var num = document.getElementById('num')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var valores = []

function inLista(n, l) {
    if (l.indexOf(Number(n)) != - 1) {
        return true
    } else {
        return false
    }

}

function clicar () {
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número!')

    } else if (num.value > 100 || num.value < 1) {
        alert('[ERRO] Digite um número entre 1 a 100')

    } else if (!inLista(num.value, valores) ) {
        n1 = Number (num.value)
        valores.push(n1)
        var item = document.createElement('option')
        item.text = `Valor ${n1} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
       alert('[ERRO] Numero ja encotrado na lista!')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]

            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}






    
