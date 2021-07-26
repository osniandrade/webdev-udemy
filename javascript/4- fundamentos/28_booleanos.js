let isAtivo = false
console.log(isAtivo)
// false

isAtivo = true
console.log(isAtivo)
// true

isAtivo = 1
console.log(!!isAtivo)
// true
// para interpretar um valor inteiro como booleano pode-se usar dupla negação

// TIPOS VERDADEIROS
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))  // o resultado dessa atribuição é avaliado (os valores listados acima)

// TIPOS FALSOS
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || 'epa'))
// epa
// retorna o único valor verdadeiro encontrado

// operador || é usado para defnir valor padrão para variável
let nome = ''
console.log(nome || 'Desconhecido')
// Desconhecido