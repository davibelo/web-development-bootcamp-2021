// cuidado se não usar {} depois do if
// o if só executará a primeira senteça após
function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final')
}

//teste1(6)
//teste1(8)

// usando chaves, executará tudo dentro da chave
function teste2(num) {
    if(num > 7) {
        console.log(num)
        console.log('Final')
    }
}

//teste2(6)
//teste2(6)

// cuidado com o ';', não usar com as estruturas de controle
// pois invalida o bloco if, pois  considera que tem uma \
// uma sentença vazia e depois um bloco
function teste3(num) {
    if(num > 7); { 
        console.log(num)
    }
}

teste3(6)
teste3(8)