function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]  // inverte os valores
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
// 49
// ...

console.log(rand([992]))
// 992
// ...

console.log(rand([, 10]))
// 9
// ...

console.log(rand([]))
// 576
// ...

// ERRO
//console.log(rand())