// função para gerar um int aleatório entre um range
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// escolhendo um valor inteiro 0-10
let escolha = 7

// fazendo um laço para adivinhar o número
// usando somente o while
teste1 = 1
while (teste1 != escolha) {
    teste1 = getInteiroAleatorioEntre(0, 10)
    console.log(`1-Número escolhido foi ${teste1}?`)
} 

console.log('Espera...')

// usando do-while
teste2 = 0
do {
    teste2 = getInteiroAleatorioEntre(0,10)
    console.log(`2-Número escolhido foi ${teste2}?`)
} while (teste2 != escolha)

console.log('Até a próxima!')