// variáveis declaradas com 'let' tem escopo de bloco {}
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
// fora = 1