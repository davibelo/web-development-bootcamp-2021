// novo recurso do ES2015
// Destructuring é usado para extrair elementos de objetos

// Exemplo:
// Criando um objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(1, pessoa.nome, pessoa.idade)

// Usando o operador para extrair informação 
// do objeto e trazer como variável global
// const {atributos para extrair} = objeto para extrair
const { nome, idade } = pessoa
console.log(2, nome, idade)

// Usando o operador, mas usando outro nome
// de variável para receber a informação
const { nome: n, idade: i } = pessoa
console.log(3, n, i)

// Se tentar extrair algo que não exista no objeto
// será retornado como undefined
// ex 1
const { sobrenome, bemHumorada = true} = pessoa
console.log(4, sobrenome, bemHumorada)
// obs: o = true, quer dizer que o valor padrão é true, 
// isto é, caso não venha informação alguma, retornará true

// ex2
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(5, logradouro, numero, cep)

// no caso abaixo dará erro, pois não tem como
// acessar atributos em um objeto undefined
const { conta: { ag, num } } = pessoa
console.log(6, ag, num)