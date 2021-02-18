// Sintaxe reduzina, intenção de criar funções rápidas

let dobro = function (a, b) {
    return 2 * a + b
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(6))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())
