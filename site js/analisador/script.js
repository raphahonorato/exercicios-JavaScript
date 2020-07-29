let num = document.querySelector("input#txtnum")
let lista = document.querySelector("select#lista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adc() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `O valor ${num.value} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''
  } else {
    alert("[ERRO] Já existe ou inválido !")
  }
  num.value = ''
  num.focus()
}

function fim(){
    if(valores.length == 0){
        alert('[ERRO] Valores inválidos !')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Possui ${tot} valores</p>`
        res.innerHTML += `<p>O Maior é ${maior}</p>`
        res.innerHTML += `<p>O menor é ${menor}</p>`
        res.innerHTML += `<p>Soma vale ${soma}</p>`
        res.innerHTML += `<p>Média vale ${media}</p>`
    }
}