function calcular() {
  let num = document.getElementById("txtn");
  let res = document.getElementById("seltab");
  if (num.value.length == 0) {
    alert(`[ERRO] Faltando valores !`);
  } else {
    let t = Number(num.value);
    //let c = 1
    res.innerHTML = "";
    for (c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${t} x ${c} = ${t * c}`;
      item.value = `res${c}`;
      res.appendChild(item);
    }
  }
}

/*
while(c <= 10){
            let item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
*/
