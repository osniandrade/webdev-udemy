// função Factory é uma função que retorna um objeto
const prod1 = {
    nome: 'calça',
    preco: 45
}

const prod2 = {
    nome: 'batata',
    preco: 2
}

// usando função factory
function criarProduto(nomeProd, precoProd) {
    return {
        nome: nomeProd,
        preco: precoProd
    }
}

console.log(criarProduto('calça', 45))
console.log(criarProduto('batata', 2))

// alternativamente, se o nome da variável for igual o nome da chave
function criarProduto2(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1   // é possível declarar um valor padrão
    }
}