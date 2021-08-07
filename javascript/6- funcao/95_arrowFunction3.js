let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)
// true
// no contexto do node o this aponta pro objeto global

//comparaComThis(window)
// true se for executado em um navegador

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
// false por conta do bind apontando pra obj
comparaComThis(obj)
// true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
// false por conta da função arrow não variar o this
comparaComThisArrow(module.exports)
// true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// false - o arrow function NÃO MUDA o contexto do this
// o contexto da função arrow é atrelado ao contexto onde a função foi escrita