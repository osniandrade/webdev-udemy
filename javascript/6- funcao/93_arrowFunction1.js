// modo normal da função
let dobro = function(a) {
    return 2 * a
}

// modo função arrow (sempre é anonima)
dobro = (a) => {
    return 2 * a
}
// alternativamente
dobre = a => 2 * a  // return implícito

console.log(dobre(Math.PI))

// normal
let ola = function() {
    return 'Olá'
}

// arrow
ola = () => 'Olá'
console.log(ola())