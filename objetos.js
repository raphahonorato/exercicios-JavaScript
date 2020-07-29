let amigo = {
nome:'Raphael',
idade:24,
peso:60,
altura:1.60,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log (`${amigo.nome} pesa ${amigo.peso} kg`)