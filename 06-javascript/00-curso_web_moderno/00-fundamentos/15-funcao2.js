// Relembrando como seria uma declaração de função 
function soma1(a, b) {
    return console.log(a + b)
}
soma1(2,2)

// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Conceito depois de 2015
// Substituindo o texto "function" por "=>"
// (entradas) => (saída)
const soma4 = (a, b) => {
    return a + b
}
console.log(soma4(2, 3))

// Para escrever uma função que executa uma sentença somente
// o uso das chaves é dispensado e o retorno é implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// função com 1 parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')