// criando um array
// para definir o array se usa []
const valores = [7.7, 8.9, 6.3, 9.2]

// acessando pelo índice
console.log(1, valores[0], valores[3])
console.log(2, valores[4])
valores[4] = 10
console.log(3, valores)

// método lenght para verificar o tamanho
console.log(4, valores.length)

// o array no js pode conter diferentes tipos
valores.push({id: 3}, false, null, 'teste')
console.log(5, valores)

// método pop ou delete para apagar elementos do array
console.log(6, valores.pop())
delete valores[0]
console.log(7, valores)

// o array é mostrado como um tipo object
console.log(typeof valores)