// par nome/valor
// mostrando o local (contexto léxico) que a variável está definida

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

// como os locais definidos (contextos léxicos) são diferentes
// consegue-se ter os valores diferentes
console.log(saudacao)
console.log(exec())
console.log(cliente)