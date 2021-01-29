// Atribuição de var em blocos
// Uma variável definida com "var" estará visível mesmo fora dos blocos
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// Atribuição de variável com "var" ou "let" dentro de funções
// Uma variával definida com "var" ou "let" não são visíveis fora das funções
function teste() {
    var local = 123
    console.log(local)
}
teste()
// tentando visualizar fora da função
//console.log(local) // dá erro!

// Cuidado ao declarar variáveis com var 
// pois o fato dela ser acessível fora dos blocos
// pode gerar sobrescrita, conforme exemplo abaixo:
var numero1 = 1
{
    var numero1 = 2
    console.log('var dentro =', numero1)
}
console.log('var fora =', numero1)

// Para variáveis criadas com "let" 
// o escopo da variável vale por bloco!!
let numero2 = 1
{
    let numero2 = 2
    console.log('let dentro =', numero2)
}
console.log('let fora =', numero2)