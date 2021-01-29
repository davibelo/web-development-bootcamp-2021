// Operadores relacionais de comparação

// não considera o type da variável
console.log('01)', '1' == 1) 
console.log('02)', '1' != 1)

// considera o type da variável
console.log('03)', '1' === 1) 
console.log('04)', '1' !== 1)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

// tomar cuidado com datas
const d1 = new Date(0)
const d2 = new Date(0)
console.log("ver)", d1, d2)
// desta forma, dá sempre falso, pq comparada o endereço de memória
console.log('09)', d1 === d2) 
console.log('10)', d1 == d2)
// desta forma, a comparação funciona bem
console.log('11)', d1.getTime() === d2.getTime())

// comparações com null e indefined
console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false
