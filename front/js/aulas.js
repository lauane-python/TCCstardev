// ============================================================
// STARDEV - SISTEMA DE AULAS
// Um único JavaScript para todas as páginas de matérias
// ============================================================

const API = "http://10.111.9.29:3000/videoaulas";

// ============================================================
// CONFIGURAÇÃO DAS MATÉRIAS
// ============================================================

const materiasConfig = [
    {
        slug: "FundamentosProgramacao",
        nome: "Fundamentos da Programação",
        classe: "roxo"
    },
    {
        slug: "LogicaProgramcao",
        nome: "Lógica de Programação",
        classe: "verde"
    },
    {
        slug: "DesenvolvimentoWeb",
        nome: "Desenvolvimento Web",
        classe: "marrom"
    },
    {
        slug: "Front-End",
        nome: "Front-end",
        classe: "amarelo"
    },
    {
        slug: "Back-End",
        nome: "Back-end",
        classe: "roxo"
    },
    {
        slug: "BancoDados",
        nome: "Banco de Dados",
        classe: "verde"
    },
    {
        slug: "ProjetoSoftware",
        nome: "Projetos",
        classe: "marrom"
    },
    {
        slug: "SegurancaInformacao",
        nome: "Segurança da Informação",
        classe: "amarelo"
    },
    {
        slug: "CodigoLimpo",
        nome: "Código Limpo",
        classe: "roxo"
    },
    {
        slug: "DesenvolvimentoMobile",
        nome: "Desenvolvimento Mobile",
        classe: "verde"
    },
    {
        slug: "RedesIOT",
        nome: "Redes e IOT",
        classe: "marrom"
    },
    {
        slug: "LinguagemProgramacao",
        nome: "Linguagem de Programação",
        classe: "amarelo"
    }
];


// ============================================================
// DESCOBRIR QUAL PÁGINA ESTÁ ABERTA
// ============================================================

function descobrirMateriaAtual() {

    const caminho = window.location.pathname;

    const nomeArquivo = caminho
        .split("/")
        .pop()
        .replace(".html", "")
        .toLowerCase();

    const materia = materiasConfig.find(
        materia => materia.slug === nomeArquivo
    );

    return materia;
}


// ============================================================
// CRIAR O CARROSSEL
// ============================================================

function criarCarrossel() {

    const carrossel = document.querySelector(".carrossel");

    if (!carrossel) {
        console.warn("Carrossel não encontrado.");
        return;
    }

    // Limpa os cards antigos
    carrossel.innerHTML = "";

    materiasConfig.forEach(materia => {

        const card = document.createElement("p");

        card.className = `card-aula ${materia.classe}`;

        const link = document.createElement("a");

        link.className = "hrefs_au";

        link.href = `/front/aulas/${materia.slug}.html`;

        link.target = "_self";

        link.textContent = materia.nome;

        card.appendChild(link);

        carrossel.appendChild(card);
    });

    iniciarArrastarCarrossel();
}


// ============================================================
// ARRASTAR CARROSSEL COM MOUSE
// ============================================================

function iniciarArrastarCarrossel() {

    const carrossel = document.querySelector(".carrossel");

    if (!carrossel) {
        return;
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    carrossel.addEventListener("mousedown", (e) => {

        isDown = true;

        carrossel.classList.add("active");

        startX = e.pageX - carrossel.offsetLeft;

        scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener("mouseleave", () => {

        isDown = false;

        carrossel.classList.remove("active");
    });

    carrossel.addEventListener("mouseup", () => {

        isDown = false;

        carrossel.classList.remove("active");
    });

    carrossel.addEventListener("mousemove", (e) => {

        if (!isDown) {
            return;
        }

        e.preventDefault();

        const x = e.pageX - carrossel.offsetLeft;

        const walk = (x - startX) * 2;

        carrossel.scrollLeft = scrollLeft - walk;
    });
}


// ============================================================
// TRANSFORMAR LINK DO YOUTUBE EM EMBED
// ============================================================

function transformarYoutube(link) {

    if (!link) {
        return "";
    }

    try {

        // youtube.com/watch?v=
        if (link.includes("youtube.com/watch?v=")) {

            const codigo = link
                .split("watch?v=")[1]
                .split("&")[0];

            return `https://www.youtube.com/embed/${codigo}`;
        }

        // youtu.be/
        if (link.includes("youtu.be/")) {

            const codigo = link
                .split("youtu.be/")[1]
                .split("?")[0];

            return `https://www.youtube.com/embed/${codigo}`;
        }

        // Caso já seja um embed
        if (link.includes("youtube.com/embed/")) {

            return link;
        }

        return link;

    } catch (erro) {

        console.error("Erro ao converter link do YouTube:", erro);

        return link;
    }
}


// ============================================================
// ENCONTRAR ÁREA ONDE AS AULAS SERÃO MOSTRADAS
// ============================================================

function encontrarListaAulas() {

    // Primeiro tenta pelo ID
    let lista = document.getElementById("listaAulas");

    if (lista) {
        return lista;
    }

    // Depois tenta pela classe que você já usa
    lista = document.querySelector(".listarAulas");

    return lista;
}


// ============================================================
// MOSTRAR AS AULAS
// ============================================================

function mostrarAulas(aulas, idMateria) {

    const lista = encontrarListaAulas();

    if (!lista) {

        console.error(
            "Não foi encontrada a área para mostrar as aulas."
        );

        return;
    }

    lista.innerHTML = "";

    // Filtra as aulas da matéria atual
    const aulasMateria = aulas.filter(
        aula => Number(aula.id_aula) === Number(idMateria)
    );

    console.log("ID da matéria atual:", idMateria);

    console.log(
        "Aulas encontradas:",
        aulasMateria
    );


    // ========================================================
    // NENHUMA AULA
    // ========================================================

    if (aulasMateria.length === 0) {

        lista.innerHTML = `
            <p class="nenhuma-aula">
                Nenhuma aula cadastrada para esta matéria.
            </p>
        `;

        return;
    }


    // ========================================================
    // RENDERIZAR CADA AULA
    // ========================================================

    aulasMateria.forEach(aula => {

        const linkVideo = transformarYoutube(aula.link);

        const article = document.createElement("article");

        article.className = "card-video";

        article.innerHTML = `
            <h2>${aula.nome_aulas}</h2>

            <p>${aula.descricao}</p>

            <iframe
                src="${linkVideo}"
                title="${aula.nome_aulas}"
                width="100%"
                height="450"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        `;

        lista.appendChild(article);
    });
}


// ============================================================
// CARREGAR AULAS DA API
// ============================================================

async function carregarAulas() {

    const lista = encontrarListaAulas();

    try {

        // ------------------------------------------------------
        // Descobre qual página está aberta
        // ------------------------------------------------------

        const materiaAtual = descobrirMateriaAtual();

        if (!materiaAtual) {

            console.error(
                "Não foi possível identificar a matéria atual."
            );

            if (lista) {

                lista.innerHTML = `
                    <p class="erro-aulas">
                        Não foi possível identificar esta matéria.
                    </p>
                `;
            }

            return;
        }

        console.log(
            "Matéria atual:",
            materiaAtual.nome
        );


        // ------------------------------------------------------
        // Mensagem de carregamento
        // ------------------------------------------------------

        if (lista) {

            lista.innerHTML = `
                <p>
                    Carregando aulas...
                </p>
            `;
        }


        // ------------------------------------------------------
        // Busca dados no backend
        // ------------------------------------------------------

        const resposta = await fetch(API);

        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );
        }

        const aulas = await resposta.json();

        console.log(
            "Aulas recebidas da API:",
            aulas
        );


        // ------------------------------------------------------
        // Encontrar ID da matéria atual
        // ------------------------------------------------------

        const aulaMateria = aulas.find(aula => {

            if (!aula.materia) {
                return false;
            }

            return aula.materia
                .toLowerCase()
                .trim()
                .includes(
                    materiaAtual.nome.toLowerCase()
                );
        });


        // ------------------------------------------------------
        // Se não encontrou a matéria
        // ------------------------------------------------------

        if (!aulaMateria) {

            console.warn(
                "Matéria não encontrada na API:",
                materiaAtual.nome
            );

            if (lista) {

                lista.innerHTML = `
                    <p class="nenhuma-aula">
                        Nenhuma aula cadastrada para esta matéria.
                    </p>
                `;
            }

            return;
        }


        // ------------------------------------------------------
        // ID encontrado
        // ------------------------------------------------------

        const idMateria = aulaMateria.id_aula;

        console.log(
            "ID encontrado:",
            idMateria
        );


        // ------------------------------------------------------
        // Renderiza as aulas
        // ------------------------------------------------------

        mostrarAulas(
            aulas,
            idMateria
        );

    } catch (erro) {

        console.error(
            "ERRO AO CARREGAR AULAS:",
            erro
        );

        if (lista) {

            lista.innerHTML = `
                <p class="erro-aulas">
                    Não foi possível carregar as aulas.
                    Verifique sua conexão com o servidor.
                </p>
            `;
        }
    }
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "StarDev - Sistema de aulas iniciado."
        );

        criarCarrossel();

        carregarAulas();
    }
);