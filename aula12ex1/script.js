function carregar() {
    var hora = document.querySelector('#hora')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var time = data.getHours()
    hora.innerHTML = `Agora são ${time} horas.`

    if (time >= 0 && time < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#febe5f'
    } else if (time <= 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#fc8d00'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#131a22'
    }
}