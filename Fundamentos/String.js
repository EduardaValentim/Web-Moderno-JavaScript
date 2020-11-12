const escola = "ProgWeb"

console.log(escola.charAt(4))
console.log(escola.charAt(8))
console.log(escola.charCodeAt(4))   // Tabela ASCII
console.log(escola.indexOf("W"))    // Retorna qual o indice do parametro passado
console.log("------------------------")
console.log(escola.substring(1))    // Retorna o que tiver depois do indece passado
console.log(escola.substring(0, 6)) // Retorna o que tiver depois do indice até o parametro passado sem inclui-lo
console.log("------------------------")
console.log('Uma escola de '.concat(escola).concat("!"))
console.log(escola.replace("W", "w")) // Troca de carateres
console.log("------------------------")
console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) // Também funiciona como o anterior