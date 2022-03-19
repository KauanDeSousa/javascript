var num = [5, 9, 2, 3]
num.push(1)
num.sort()
for (var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)