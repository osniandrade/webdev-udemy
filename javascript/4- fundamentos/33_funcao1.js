// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
// 5
imprimirSoma(2)
// NaN
imprimirSoma(2, 3, 4, 5, 6)
// 5
imprimirSoma()
// NaN

// função com retorno
function soma(a, b = 1) {  // define q o valor padrão de B é zero (se não vier valor pra ele)
    return a + b
}

console.log(soma(2, 3))
// 5
console.log(soma(2))
// 3
console.log(soma())
// NaN