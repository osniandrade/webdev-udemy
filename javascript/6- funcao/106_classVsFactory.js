// classe
// cuidado pq o 'this' pode variar
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// factory
const p1 = new Pessoa('Inigo Montoya')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Bond, James Bond')
p2.falar()