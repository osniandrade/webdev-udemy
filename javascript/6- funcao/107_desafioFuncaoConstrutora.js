// minha solução
function Pessoa(nome) {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Fabio')
console.log(p1.falar())

// solução do professor
function Pessoa2(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa2('Geraldo')
p2.falar()