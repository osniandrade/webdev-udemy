const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)  // o this é o proprio objeto aqui
    }
}

pessoa.falar()
// bom dia

const falar = pessoa.falar
falar()   // o this aqui agora refere a um contexto diferente
// undefined

const falarDePessoa = pessoa.falar.bind(pessoa)  // define qual o contexto do this
falarDePessoa()
// bom dia