// recurso novo do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua a',
        numero: 100
    }
}

// operador destructuring
const { nome, idade } = pessoa  // "tire do obj pessoa os valores de nome e idade"
console.log(nome, idade)
// Ana 5

const { nome: n, idade: i } = pessoa
console.log(n, i)
// Ana 5

const { sobrenome, humor = 3} = pessoa
console.log(sobrenome, humor)
// undefined 3

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
// Rua a 100 undefined

// erro!
//const { conta: { ag, num } } = pessoa