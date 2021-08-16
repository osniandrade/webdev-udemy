// formas de declarar funções

// function declaration
console.log(soma(3, 4))
// quando declarado assim ela pode ser chamada antes da declaração
function soma(x,y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

// named function expression
// pouco usado (útil em debug)
const mult = function mult(x, y) {
    return x * y
}