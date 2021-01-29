// quando a variável é definida com "var"
// ocorre o hoisting (içamento)
// a declaração é movida pro topo
// assim é possível atribuir depois de usar
console.log('a =', a)
var a = 2
console.log('a =', a)

//o mesmo não ocorre com "let"
console.log('b =', b)
let b = 2
console.log('b =', b)