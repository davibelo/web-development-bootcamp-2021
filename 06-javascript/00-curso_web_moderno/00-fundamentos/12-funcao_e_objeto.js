// No js a função está acima do objecto hierarquicamente!!!
// Perceba que o object é uma função!!!!
console.log(1, typeof Object)
console.log(2, typeof new Object)

// Forma 1 de criar uma função
// atribuiu-se a função a uma constante para poder visualizar o tipo
// mas isso não é necessário para criar uma função
const Cliente = function() {} 
console.log(3, typeof Cliente)
console.log(4, typeof new Cliente)

// Forma 2 de criar uma função (a partir de 2015) 
class Produto {} 
console.log(5, typeof Produto)
console.log(6, typeof new Produto())