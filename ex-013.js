/*var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
  console.log("Não vota")
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional")
} else {
  console.log("Voto obrigatório")
}
*/
var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)
if(hora < 12){
    console.log('Bom dia !')
}else if (hora < 18){
    console.log('Boa Tarde !')
}else{
    console.log('Boa noite zzzz')
}
if(hora > 23 && hora < 6){
    console.log('Boa madruga ZzZzZ')
}