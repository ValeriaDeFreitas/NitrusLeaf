const date = new Date();
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const currentDate = document.querySelector('.currentDate')
currentDate.innerHTML = `Novos pedidos foram realizados desde o último acesso ao sistema. Hoje é <strong>${day}/${month}/${year}</strong>.`

function tipoPessoa(){
    let fisica = document.getElementById("fisica");
    let juridica = document.getElementById("juridica");
    let formFisica = document.getElementById("formFisica");
    let formJuridica = document.getElementById("formJuridica");

    if(fisica.checked){
        formFisica.style.display = "block";
        formJuridica.style.display = "none";
    }else if(juridica.checked){
        formFisica.style.display = "none";
        formJuridica.style.display = "block";

    }
}