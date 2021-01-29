// OPERADORES UNÁRIOS
// atribuindo valores
let num1 = 1
let num2 = 2

// o perador ++ e -- acrescenta e decrescem 1 respectivamente
// pode ser usado depois da variável
num1++
console.log("f)", num1)
num1--
console.log("g)", num1)

// pode ser usado antes da varíavel
++num2
console.log("h)", num2)
--num2
console.log("i)", num2)

// faz diferença, pois quando é usado depois
// o operador que vem antes tem preferencia

// exemplo:
// a comparação é feita antes do operador do num2
console.log("j)", ++num1 === num2--) // (++1 === 2)--
// a comparação é feita depois do operador do num2
console.log("k)", ++num1 === --num2) // (++1) === (--2)


// OPERADOR TERNÁRIO
// (expressão) ? (resultado se true) : (resultado se false)
// no exemplo abaixo, usou-se o operador junto com uma função arrow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log("l)", resultado(7.1))
console.log("m)", resultado(6.7))