// Primeiramente criando uma função para lançar o erro
function tratarErroELancar(erro) {
    // exemplos:
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    // pode também retornar um objeto:
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

// usado o try para executar a função
// catch é a resposta caso o código do try dê erro
// finally é o código a executar sempre
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErroELancar(erro) //usando a função criada acima
    } finally {
        console.log('final')
    }
}

// chamando a função para verificar o tratamento
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)