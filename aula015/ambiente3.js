var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(var i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
var pos = valores.indexOf(4)
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na ${pos} posição`)
}
