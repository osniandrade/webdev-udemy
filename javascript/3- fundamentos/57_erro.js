function trataErroELancar(erro) {
    throw new Error('parametro errado')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.message,
    //     date: new Date
    // }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        trataErroELancar(e)
    } finally {                // vai ser chamado tendo erro ou não
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
// obj.nome != obj.name