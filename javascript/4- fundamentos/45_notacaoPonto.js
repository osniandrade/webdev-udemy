console.log(Math.ceil(6.1))
// 7

const obj1 = {}
obj1.nome = 'bola'
// alternativa
//obj1['nome'] = 'bola2'
console.log(obj1.nome)
// bola2

function Obj(nome) {
    this.nome = nome  // cria um atributo público
    this.exec = function() {
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
// cadeira
console.log(obj3.nome)
// mesa
obj3.exec()
// exec...