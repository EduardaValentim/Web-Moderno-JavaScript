for (let e = 0; e < 10; e++) {
    console.log(e)
}

//console.log(e) // Erro!

///////////////////////

const funcs = []

for (let e = 0; e < 10; e++) {
    funcs.push(function() {
       console.log(e) 
    })
}

funcs[2]()
funcs[8]()