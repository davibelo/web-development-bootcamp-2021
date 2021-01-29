const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)

const a = 7
let b = 3

// formas abreviadas
// b = b - 4
b -= 4 
console.log("a)", b)

// b = b * 2
b *= 2 
console.log("b)", b)

// b = b / 2
b /= 2
console.log("c)", b)

// b = b % 2 
b %= 2 
console.log("d)", b)

// b = b + a
b += a 
console.log("e)", b)