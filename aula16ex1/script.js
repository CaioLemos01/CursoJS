let num = document.querySelector("#inum")
let select = document.querySelector("#iselect")
let res = document.querySelector("#res")
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        select.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar sua lista")
    } else {
        let total = valores.length
        let soma = 0

        for (let i in valores) {
            soma += valores[i]
        }

        res.innerHTML = ""
        valores.sort()
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${valores[valores.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${valores[0]}.</p>`
        res.innerHTML += `<p>O soma dos números resulta em ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${soma / total}.</p>`

    }
}