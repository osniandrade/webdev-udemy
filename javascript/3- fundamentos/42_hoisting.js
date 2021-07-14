// qdo uma variável é declarado com 'var' a 
// declaração dela é jogada pro inicio do código durante a compilação
// mas a atribuição de valor dela NÃO é "içada"
console.log('a =', a)
// a = undefined
var a = 2
console.log('a =', a)
// a = 2

// não dá erro de "a not defined"

// console.log('b = ', b)
// 'b not defined'
let b = 3
console.log('b = ', b)
// b = 3