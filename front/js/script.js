document.addEventListener("DOMContentLoaded", () => {

    console.log("StarDev iniciado.");

    // ============================================================
    // LINKS COM TARGET _SELF
    // ============================================================

    const linksInternos = document.querySelectorAll(
        'a[data-interno="true"]'
    );

    linksInternos.forEach(link => {
        link.addEventListener("click", () => {
            link.target = "_self";
        });
    });


    // ============================================================
    // BOTÃO VOLTAR
    // Caso exista algum elemento com class="btn-voltar"
    // ============================================================

    const botaoVoltar = document.querySelector(".btn-voltar");

    if (botaoVoltar) {

        botaoVoltar.addEventListener("click", () => {
            window.history.back();
        });

    }


    // ============================================================
    // MENU MOBILE
    // Caso alguma página possua menu mobile
    // ============================================================

    const botaoMenu = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu");

    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", () => {

            menu.classList.toggle("ativo");

        });

    }


    // ============================================================
    // FECHAR MENU AO CLICAR EM UM LINK
    // ============================================================

    if (menu) {

        const linksMenu = menu.querySelectorAll("a");

        linksMenu.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("ativo");

            });

        });

    }

});