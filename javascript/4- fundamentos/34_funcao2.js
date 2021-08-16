// armazenando uma função em uma variável
const imprimirSoma = function (a, b) {  // função anonima
    console.log(a + b)
}

imprimirSoma(2, 3)
// 5

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))
// 5

// retorno implícito em uma arrow function
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
// -1

// exemplo de função com um único parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Legal')