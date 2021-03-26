/* 
    12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))

function fatorial2(num) {
    let fat = 1     // Elemento neutro da multiplicação
    for(let i = num; i > 1; i--) { // 5 4 3 2
        fat *= i    // fat = fat * i
    }
    return fat
}

console.log(fatorial2(10))