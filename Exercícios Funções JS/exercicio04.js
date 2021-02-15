/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores
*/

function divisao(dividendo, divisor) {
    console.log('Resultado: ' + Math.floor(dividendo/divisor));
    console.log('Resto: ' + `${dividendo % divisor}`)
}

divisao(11, 3)

// Para exibir varios resultados em um vetor
function somasub(num1, num2) {
    let vetor = []
    let soma = num1 + num2
    let sub = num1 - num2
    vetor.push(soma)
    vetor.push(sub)
    return vetor
}

console.log(somasub(5, 2))
