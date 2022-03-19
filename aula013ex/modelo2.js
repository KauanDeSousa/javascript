var tab = document.getElementById('seltab')

function clicar() {
    var tabuada = document.getElementById('num')
    var limpar = document.getElementById('button').disabled = false

    if (tabuada.value.length == 0) {
        alert('[ERRO] Digite um número!')

    } else {
        n1 = Number (tabuada.value)
        for (var c = 0; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
            
        }

    }

}

function limpar() {
    var tab = document.getElementById('seltab').innerHTML = "";
    var limpar = document.getElementById('button').disabled = true
}



    
