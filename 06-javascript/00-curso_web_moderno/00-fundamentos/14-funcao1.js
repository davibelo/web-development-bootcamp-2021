// Funcao é muito importante no js, mais que object
// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
// a linguagem suporta entradas diferentes do previsto na função
imprimirSoma(2) 
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
// o valor depois de = é uma valor padrão de retorno
function soma(a, b = 1) {
    return a + b
}

console.log("Soma com 2 atributos: ", soma(2, 3))
console.log("Soma com 1 atributo: ", soma(2))
console.log("Soma com 0 atributos: ", soma())