// Esperando o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    // Atualizando a data na página
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Mês começa de 0, então somamos 1
    const year = date.getFullYear();
    const currentDate = document.querySelector('.currentDate');

    if (currentDate) {
        currentDate.innerHTML = `Novos pedidos foram realizados desde o último acesso ao sistema. Hoje é <strong>${day}/${month}/${year}</strong>.`;
    }

    // Função para exibir o formulário de acordo com o tipo de pessoa selecionado
    function tipoPessoa() {
        let fisica = document.getElementById("fisica");
        let juridica = document.getElementById("juridica");
        let formFisica = document.getElementById("formFisica");
        let formJuridica = document.getElementById("formJuridica");

        // Verificando se a opção "Física" está selecionada
        if (fisica && fisica.checked) {
            formFisica.style.display = "block";
            formJuridica.style.display = "none";
        }
        // Verificando se a opção "Jurídica" está selecionada
        else if (juridica && juridica.checked) {
            formFisica.style.display = "none";
            formJuridica.style.display = "block";
        }
    }

    // Adicionando ouvintes de evento para os inputs
    let fisica = document.getElementById("fisica");
    let juridica = document.getElementById("juridica");

    if (fisica && juridica) {
        fisica.addEventListener("change", tipoPessoa);
        juridica.addEventListener("change", tipoPessoa);
    }
});
