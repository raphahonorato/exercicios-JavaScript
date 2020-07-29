let a = [2,4,6]
/*
for(let pos in a){
    console.log(`No indice ${pos}, esta o elemento ${a[pos]} `)
}
*/

let pos = a.indexOf(2)
if(pos == -1){
    console.log ('ERRO')
}else{
    console.log(`O elemento ${a[pos]} , esta no indice ${pos} !`)
}

/*
for(pos = 0; pos < a.length ; pos++){
    console.log (`No indice ${pos}, está o elemento ${a[pos]} `)
}
*/

