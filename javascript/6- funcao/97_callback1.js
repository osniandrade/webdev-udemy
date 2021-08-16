// uma função é passada como parâmetro para outra função e quando
// um determinado evento acontecer essa função recebida será chamada
// pode ser chamada mais de uma vez ou apenas uma vez
const fabricantes = ["mercedes", "audi", "bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
// 1. mercedes
// 2. audi
// 3. bmw

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
// versão da função acima como arrow function
fabricantes.forEach(fabricante => console.log(fabricante))
// mercedes
// audi
// bmw

