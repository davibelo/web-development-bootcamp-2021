// Essa funcionalidade inserida em 2015 permite ter um código mais elegante
// Implementação simples sem template string
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Implementação com template string
// Para usar essa funcionalidade usar o símbolo da craze ao invés de aspas

const template = `Olá ${nome}!`
console.log(concatenacao, template)
// o compilador javascript só vai processar o que estiver dentro de ${}
// o restante vai considerar tudo como string
// inclusive respeitando espaços e tabulações

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

// dentro do template pode ser chamada uma função
const up = texto => texto.toUpperCase() // função up, que transforma uma string em uppercase
console.log(`Ei... ${up('cuidado')}!`) // chamando a função dentro do template string