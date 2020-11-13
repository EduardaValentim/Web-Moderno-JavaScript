const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (x in notas) {
    if (x == 3) {
        break
    }
    console.log(`${x} = ${notas[x]}`)
}

console.log('---------------------------')

for (y in notas) {
    if (y == 2) {
        continue
    }
    console.log(`${y} = ${notas[y]}`)
}

// NÃO USE ESSA ESTRUTURA MAS, ELA EXISTE
externo: for (a in notas) {
    for (b in notas) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}