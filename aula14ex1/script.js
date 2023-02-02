function clicar() {
    var comeco = document.querySelector('#inicio')
    var final = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var r = document.querySelector('#res')

    if (comeco.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        //Não preencher algum dos dados
        alert('[ERRO] Dados insuficientes!')
    } else if (comeco.value > final.value && comeco.value.length > final.value.length) {
        //Início começa depois do final do programa
        alert('[ERRO] O início deve ser menor do que o fim!')
    } else if (comeco.value < 0 || final.value < 0 || passo.value < 0) {
        //Valores negativos
        alert('[ERRO] Valores negativos não são admitidos!')
    } else if (passo.value == 0) {
        //Passo 0 
        alert('[ERRO] Passo 0 não é válido, vamos calcular considerando passo 1!')
        passo = 1
        r.innerHTML = 'Contando: <br />'
        var ini = Number(comeco.value)
        var fim = Number(final.value)
        var pas = passo
        for (var c = ini; c <= fim; c += pas) {
            r.innerHTML += `${c} \u{27A1} `
        }
        r.innerHTML += `FIM!`
    } else {
        r.innerHTML = 'Contando: <br />'
        var ini = Number(comeco.value)
        var fim = Number(final.value)
        var pas = Number(passo.value)
        for (var c = ini; c <= fim; c += pas) {
            r.innerHTML += `${c} \u{27A1} `
        }
        r.innerHTML += `FIM!`
    }
}