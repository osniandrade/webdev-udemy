function Pessoa() {
    this.idade = 0,
    setInterval(function() {
        this.idade++,
        console.log(this.idade)
    }, 1000)  // a cada 1 segundo a função anonima vai ser ativada
}

new Pessoa
// NaN
// NaN
// NaN

function Pessoa2() {
    this.idade = 0

    const self = this  // define o self como uma constante q referencia o this
    setInterval(function() {
        this.idade++,
        console.log(self.idade)  // usa a constante definida acima
    }/*.bind(this)*/, 1000)  
    // alternativamente, o bind aqui define o contexto onde a função anonima deve buscar a ref do this
}

new Pessoa2
// 1
// 2
// 3