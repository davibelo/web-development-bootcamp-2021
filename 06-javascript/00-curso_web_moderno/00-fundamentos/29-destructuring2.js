// Usando destructuring em arrays

// extraindo a,b do array [10, 20]
const [a,b] = [10,20]
console.log(a,b)

// extraindo, pulando elementos e usando valor padrão
const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n5, n6)

// extraindo de um array dentro de outro array

// ignorando todos os elementos do primeiro array
// e pegando somento o último array
const [, [nota1a, nota1b, nota1c]] = [[8, 8, 8], [10, 9, 7]]
console.log(nota1a, nota1b, nota1c)

// pegando somento o último e penúltimo do segundo array
const [, [, nota2b, nota2c]] = [[8, 8, 8], [10, 9, 7]]
console.log(nota2b, nota2c)

// pegando somento o último elemento do segundo array
const [, [, nota3c]] = [[8, 8, 8], [10, 9, 7]]
console.log(nota3c)