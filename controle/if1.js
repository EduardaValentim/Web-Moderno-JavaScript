function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(4.1)

function soForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade ... ' + valor)
    }
}

soForVerdadeiroEuFalo()
soForVerdadeiroEuFalo(null)
soForVerdadeiroEuFalo(undefined)
soForVerdadeiroEuFalo(NaN)
soForVerdadeiroEuFalo('')
soForVerdadeiroEuFalo(0)
soForVerdadeiroEuFalo(-1)
soForVerdadeiroEuFalo(' ')
soForVerdadeiroEuFalo('?')
soForVerdadeiroEuFalo([])
soForVerdadeiroEuFalo([1, 2])
soForVerdadeiroEuFalo({})