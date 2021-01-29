// Usando a notação "." para acessar funções e métodos do objeto
console.log(Math.ceil(6.1))


// Usando "." para acessar um atributo de um objeto
const obj1 = {} // criando um objeto 
obj1.nome = 'Bola' //pode-se criar e atribuir valor ao mesmo tempo
// obj1['nome'] = 'Bola2' //outra forma de fazer
console.log(obj1.nome)

// OBS: 
// lembrando, no js a função está acima de objeto
// o objeto é uma função

// Usando "." para criar atributos ou funções de um função
function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

// criando um novo objeto derivado do primeiro
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

// Usando o ponto para acessar funções e atributos
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()