// antes de inicializar, mostra undefined
let valor
console.log(1,valor)

// você oode atribuir uma ausência de valor
valor = null 
console.log(2,valor)

// Se tentar transformar valor nulo em string vai dar erro.
// console.log(valor.toString())

const produto = {}
console.log(3,produto.preco) //o preço não está definido
console.log(4,produto) //produto existe mas está vazio

produto.preco = 3.50
console.log(5,produto)

// é possível, mas não recomendado atribuir undefined
produto.preco = undefined
console.log(6,!!produto.preco) // o undefined convertido pra bool dá false
// visualizando o que ficou no objeto
console.log(7,produto)

// atribuindo null
produto.preco = null 
console.log(8,!!produto.preco) //convertendo para bool
console.log(9,produto)