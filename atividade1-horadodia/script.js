function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#FFE4E1'
    }

    else if(hora >= 12 && hora < 18) { 
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#FA8072'
    }

else {
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#2F4F4F'
}

}