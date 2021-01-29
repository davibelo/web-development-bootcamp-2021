// usando if-else
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } 
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

// cuidado com a tipagem fraca do js
imprimirResultado('Epa!')