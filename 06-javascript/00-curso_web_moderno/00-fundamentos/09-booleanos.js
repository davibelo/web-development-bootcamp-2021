// Usando false / true
let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

// Usando 1 / 0
isAtivo = 1
// para o compilador entender que 1 é bool e não number
// usa-se o recurso de negar 2x, pois ! = "not"
console.log(!!isAtivo)


// todos esses valores abaixos, o compilador retorna como verdadeiro
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// todos esses valores abaixos, o compilador retorna como falso
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// || significa "ou"
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

// Usando o "ou" para deixar um valor padrão para uma variável
// ou seja, uma valor para assumir caso a variável não receba valor
let nome1 = 'Lucas'
console.log(nome1 || 'Desconhecido')

let nome2 = ''
console.log(nome2 || 'Desconhecido')