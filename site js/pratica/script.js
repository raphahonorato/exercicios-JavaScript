function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas !`
    if(hora >= 0 && hora <= 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#f1d8ad'
    }else if(hora > 12 && hora <18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#fe8700'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#134a74'
    }
}