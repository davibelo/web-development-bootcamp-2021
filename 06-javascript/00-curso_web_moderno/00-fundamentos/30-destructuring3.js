// Criando uma função
// Os parâmetros da função são retirados de dentro do
// objeto subsequente 
function rand({min = 0, max = 1000}) { // 0 e 1000 são valores padrão
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// criando um objeto - não é destructuring
const obj = { max: 50, min: 40 }
// usando o objeto para passar os parâmetros para a função 
console.log(rand(obj))

// passando somente um parâmetro, o outro assumirá o valor padrão
console.log(rand({ min: 955 }))

// sem passar parâmetro, usará os valores padrão
console.log(rand({}))

// fazendo desta forma, dará erro, para a forma que 
// a função está construida
//console.log(rand())

// NÃO ENTENDI MUITO O SENTIDO DO EXEMPLO ACIMA
// POIS A NÃO ENTENDO PRA QUE USAR O DESTRUCTURING 
// NUMA FUNÇÃO, SE CONFORME ABAIXO, FUNCIONA BEM:

function rand2(min = 0, max = 100) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log("nao entendo", rand2())