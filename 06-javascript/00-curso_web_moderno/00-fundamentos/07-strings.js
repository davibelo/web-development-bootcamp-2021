// STRING
// a string pode ser definida com aspas simples ou duplas
const escola = "Colégio Elo"
console.log(17, escola.charAt(3))
console.log(18, escola.charCodeAt(3)) // código da tabela unicode
console.log(19, escola.indexOf("l")) // achando o índice do "C"
console.log(20, escola.substring(1)) // faz uma substring a partir da string
console.log(21, escola.substring(1,5)) // faz uma substring a partir da string
console.log(22, "O nome do local é ".concat(escola).concat("!")) // concatenando
console.log(23, "O nome do local é "+escola+"!") //concatenando
console.log(24, escola.replace("Elo", "Belo"))
console.log(25,"Ana,Maria,Braga".split()) //transformando a string em um array de strings