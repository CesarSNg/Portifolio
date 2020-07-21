document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}





/*Teste do botão
const buttons = document.querySelector(".banner butonn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function(e){

            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('button');
            ripples.style.left = x + 'px';
            ripples.style.top =  y + 'px';
            this.appendChild(ripples);

            setTimeout (() => {
                ripples.remove()
            },1000);
        })
    });*/