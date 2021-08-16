// recebendo parâmetros não declarados e recuperando seus valores dentro da função
// usar a palavra-chave 'arguments', que é um array com os argumentos enviados na
// chamada da função
// não se usa mais, hj usa-se rest/spread
function soma() {
    let soma = 0
    for(let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))