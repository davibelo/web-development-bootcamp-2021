// no backend o js é executado pelo node.js
// existe diferença no escopo global 
// ver exemplos abaixo

// Criando a variável fora do global
let a1 = 3
console.log(1,a1)
var a2 = 3
console.log(2,a2)

// Para criar dentro de global
global.b = 123
console.log(3, global.b)

abc = 3 // nao faça isso em casa!!!
console.log(4,global.abc)

// Outra forma de criar variável
// no node.js o this é o module.exports!!!
this.c = 456
this.d = false
this.e = 'teste'
console.log(5,this.c)
console.log(6,module.exports.c)
console.log(7,module.exports === this)
console.log(8,module.exports)

// Criando direto com module.exports
module.exports = { f: 456, g: false, h: 'teste' }
console.log(9, module.exports)