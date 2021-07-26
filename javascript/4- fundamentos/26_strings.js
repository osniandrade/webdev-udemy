const escola = "Cod3r"

console.log(escola.charAt(4))
// r
console.log(escola.charAt(5))
// [vazio]

console.log(escola.charCodeAt(3))
// 51
// retorna o valor do caractere na tabela ascii, html ou unicode
console.log(escola.indexOf('3'))
// 3

console.log(escola.substring(1))
// od3r
console.log(escola.substring(0, 3))
// Cod

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')
// Escola Cod3r!

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))  // regex
// Coder

console.log('Ana,Maria,Pedro'.split(','))
// transforma o string em um array usando ',' como separador
// [ 'Ana', 'Maria', 'Pedro' ]