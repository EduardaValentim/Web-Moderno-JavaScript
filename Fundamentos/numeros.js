const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const peso3 = 1.5
const peso4 = Number('2.5')

console.log(peso3, peso4)
console.log(Number.isInteger(peso3))
console.log(Number.isInteger(peso4))

const avaliacao1 = 9.843
const avaliacao2 = 6.106
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)
