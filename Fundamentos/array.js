const valores = [7, 8, 8.9, 8.5, 3.2]
console.log(valores[0], valores[3])
console.log(valores[6])

valores[10] = 10
console.log(valores)

valores[5] = 12
console.log(valores)
console.log(valores.length)

// Add novos valores
valores.push({id:3}, false, null, 'teste')
console.log(valores)

// Delete o último valor do array
console.log(valores.pop())

//Delete qualquer valor a partir do seu índice
delete valores[0]
console.log(valores)

// tipo
console.log(typeof valores)