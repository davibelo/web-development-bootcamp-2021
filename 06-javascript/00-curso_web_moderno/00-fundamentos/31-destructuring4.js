// usando destructuring com array em função
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Perceba que a forma que o código está
// permite que os parâmetros sejam passados 
// em qualquer ordem
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) //dá erro

// NAO ENTENDO NOVAMENTE
// VEJA QUE FUNCIONA SEM PRECISAR
// USAR O DESESTRUCTURING

function rand2(min = 0, max = 1000) {
    if (min > max) [min, max] = [max, min] // 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand2(50, 40))
