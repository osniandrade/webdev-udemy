const valores = [7.7, 8.9, 6.3, 9.2]
// declaração de forma literal

console.log(valores[0], valores[3])
// 7.7 9.2
console.log(valores[4])
// undefined
valores[4] = 10
console.log(valores[4])
// 10

console.log(valores.length)
// 5

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// é possível misturar tipos de valores em um array porém
// não é uma boa prática

console.log(valores.pop())
// retorna o último valor de um array e o exclui
delete valores[0]
// apaga um valor de um array e mantém a posição dele vazia
console.log(typeof valores)
// object