// par nome/valor
const saudacao = 'opa'  // contexto léxico 1

function exec() {
    const saudacao = 'faala'  // contexto léxico 2
    return saudacao
}
// por conta dos "saudacao" estarem em contextos diferentes, não gera conflito
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logrdouro: 'rua legal',
        numero: 123
    }
}

console.log(saudacao)
// opa
console.log(exec())
// faala
console.log(cliente)
// {
//   nome: 'Pedro',
//   idade: 32,
//   peso: 90,
//   endereco: { logrdouro: 'rua legal', numero: 123 }
// }