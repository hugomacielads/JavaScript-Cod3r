/*
    10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

function verifica(num) {
    let valido  = true
    if (num % 3 == 0) {
        console.log(`${valido}`)
    } else {
        valido = false
        console.log(`${valido}`)
    }
}

verifica(9)

// Modelo da correção
function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))