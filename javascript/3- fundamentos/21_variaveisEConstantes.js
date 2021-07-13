// regra geral: crie variáveis usando "let"
var a = 3
let b = 4

var a = 30
// variáveis com "let" não podem ser redeclaradas, com o "var" pode.
// let b = 40
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// não é possível atribuir valor a constantes
// c = 50
console.log(c)