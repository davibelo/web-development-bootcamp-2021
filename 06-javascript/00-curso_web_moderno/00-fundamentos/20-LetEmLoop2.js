// criando um array
const funcs = []

// Usando push pra inserir valores no array
// Os valores inseridos são funções de imprimir no console
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Usando "let" os valores de i vão ser diferentes 
// para todos os índices do array
funcs[2]()
funcs[6]()
funcs[8]()