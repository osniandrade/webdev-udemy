let valor  // não inicializada
console.log(valor)
// undefined

valor = null  // ausência de valor
console.log(valor)
// null
//console.log(valor.toString())  // Erro!

const produto = {}
console.log(produto.preco)
// undefined
console.log(produto)
// {}

produto.preco = 3.50
console.log(produto)
// { produto: 3.50}

produto.preco = undefined  // evite atribuir "undefined" manualmente
console.log(!!produto.preco)
// false
console.log(produto)
// { produto: 3.50}

produto.preco = null  // sem preço (diferente de preço = 0)
console.log(!!produto.preco)
// false
console.log(produto)
// { produto: null }