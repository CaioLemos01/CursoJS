function clicar() {
    var ano_agora = new Date()
    var ano = ano_agora.getFullYear()
    var ano_digitado = document.getElementById('ano')
    var result = document.querySelector('#resultado')
    if (ano_digitado.value.length == 0 || Number(ano_digitado.value) > ano || Number(ano_digitado.value) < 0) {
        alert('[ERRO] Verifique os capos e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(ano_digitado.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Images/crianca-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Images/jovem-h.png')
            } else if (idade <= 60) {
                //Adulto
                img.setAttribute('src', 'Images/adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Images/idoso-h.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Images/crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Images/jovem-m.png')
            } else if (idade <= 60) {
                //Adulto
                img.setAttribute('src', 'Images/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Images/idoso-m.png')
            }
        }
        result.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        result.appendChild(img)
    }
}