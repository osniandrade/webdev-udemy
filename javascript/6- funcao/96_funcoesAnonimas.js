// função anonima é uma função sem nome
const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
// 7

imprimirResultado(3, 4, soma)
// 7

imprimirResultado(3, 4, function(x, y) {
    return x - y
})
// -1

imprimirResultado(3, 4, (x, y) => x * y)
// 12

// outro exemplo de função anonima
const pessoa = {
    falar: function() {
        console.log('opa')
    }
}

pessoa.falar()