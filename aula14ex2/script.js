function tabuada() {
    let num = document.getElementById("inum")
    let tab = document.getElementById("itab")
    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let i = document.createElement("option")
            i.text = `${n} x ${c} = ${n*c}`
            i.value = `tab${c}`
            tab.appendChild(i)
            c++
        }
    }
}