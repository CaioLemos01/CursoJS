let array = []
var tel = document.getElementById("tela")

function adicionar () {
    let num = document.getElementById("inum")
    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        let n = Number(num.value)
        array.push(n)
        tel.innerHTML = `${array}`
    }
}