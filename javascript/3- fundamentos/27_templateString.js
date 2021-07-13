const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
Olá
${nome}!`
// template string suporte quebra de linhas

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)
// aceita expressões

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
// é possível chamar uma função também dentro de template string