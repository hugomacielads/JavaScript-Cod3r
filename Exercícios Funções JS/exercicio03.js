/*
    03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

// Arrow Function
potencia = (base, expoente) => base ** expoente
console.log(potencia(2, 4))

// Metodo clássico
function expoente (base, expoente) {
    resultado = base ** expoente
    return resultado
}

console.log(expoente(2, 3))
