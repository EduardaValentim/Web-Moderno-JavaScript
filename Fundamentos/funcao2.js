// Armazenando uma função dentro de uma variavel
const imprimirSoma = function  (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 7))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(7, 6))