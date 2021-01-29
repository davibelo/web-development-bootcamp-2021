//criando um array
const funcs = []

// Usando push pra inserir valores no array
// Os valores inseridos são funções de imprimir no console
for (var i = 0; i < 10; i++) {
    funcs.push(function() { 
        console.log(i)
    })
}

// Usando "var" os valores de i vão ser iguais 
// para todos os índices do array
funcs[2]()
funcs[8]()