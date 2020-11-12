for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i)

//////////////////////

const funcs = []

for (var e = 0; e < 10; e++) {
    funcs.push(function() {
       console.log(e) 
    })
}

funcs[2]()
funcs[8]()
