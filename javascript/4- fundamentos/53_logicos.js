function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)  // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2  // xor usando diferença
    const manterSaudavel = !comprarSorvete  // operador unário
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // quando a chave é omitida na criação de um objeto 
    // é criado automaticamente chave/valor com msm nome 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))