var treino = document.querySelector('.treino')

var botao = document.querySelector('#botao')


treino.innerHTML = 'Meu primeiro programa'

function conta() {
    var n1 = document.querySelector('#n1').value
    var resultado = document.querySelector('.resultado')
    n1 = Number (n1)

    c = 0
    while (c < n1) {
        var qdo = document.createElement('div')
        qdo.setAttribute('class','qdo')
        c++
        resultado.appendChild(qdo)
    }

    if (n1%2) {
        resultado.innerHTML = `Nao vou calcular !`
        
    }
    else {
        for (c = 1; c < 11; c++) {
        resultado.innerHTML += `<br>${n1} x ${c} = ${c*n1}`
        }
    }  
} 


