const prod1 = {}
// os campos de um objeto podem ser criados dinamicamente (chave/valor)
prod1.nome = 'Celular fodão'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40  // evitar atributos com espaço no nome

console.log(prod1)

// notação literal de objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    estoque: true,
    obj: {
        blabla: 1,
        obj: {
            blublu: 2
        }
    }
}

console.log(prod2)