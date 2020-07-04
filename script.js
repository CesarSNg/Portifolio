document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);





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