function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
// 42
// 49
// ...
console.log(rand({ min: 955 }))
// 955
// ...
console.log(rand({}))
// 579
// ...
// ERRO!!
//console.log(rand())
