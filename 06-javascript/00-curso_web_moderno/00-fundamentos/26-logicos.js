/*
Operadores lógicos:
ou ||
e  &&
not !

igual ==
estritamente igual === 
diferente !=
estritamente diferente !==
... 
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // or
    const comprarTv50 = trabalho1 && trabalho2 // and
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor simulado
    const manterSaudavel = !comprarSorvete // not

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //*obs
}

// *obs:
// antes da atualização de 2015, 
// precisaria criar o objeto com a sintaxe padrao no return
// {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50...} ou
// {a: comprarSorvete, b: comprarTv50...}

console.log(1, compras(true, true))
console.log(2, compras(true, false))
console.log(3, compras(false, true))
console.log(4, compras(false, false))