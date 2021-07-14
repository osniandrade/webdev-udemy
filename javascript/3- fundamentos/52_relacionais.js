console.log('1' == 1)  // compara apenas os valores
// true

console.log('1' === 1)  // compara os valores e o tipo
// false

console.log('3' != 3)
// false

console.log('3' !== 3)
// true

console.log(3 < 2)
console.log(3 > 2)
console.log(3 >= 2)
console.log(3 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)
// faz a comparação com os endereços de memória
console.log(d1 === d2)
// false
console.log(d1 == d2)
// false
console.log(d1.getTime() === d2.getTime())
// true

console.log(undefined == null)
// true
console.log(undefined === null)
// false