/**
 * ==========================================
 * DEV MENTOR
 * RAG SERVICE
 * ==========================================
 *
 * Nesta primeira versão não utilizamos
 * embeddings.
 *
 * Este serviço apenas organiza todo o
 * contexto que será enviado ao Ollama.
 */
const fs = require("fs");
const path = require("path");
const caminhoBase = path.join(
    __dirname,
    "../data/base_conhecimento.txt"
);
// Lê a base de conhecimento
function obterBaseConhecimento() {
    try {
        return fs.readFileSync(
            caminhoBase,
            "utf8"
        );
    } catch (erro) {
        console.error(
            "Erro ao carregar base de conhecimento:",
            erro
        );
        return "";
    }
}
// Contexto da página onde o aluno está.
function obterContextoPagina(pagina = "") {
    pagina = pagina.toLowerCase();
    if (pagina.includes("afront")) {
        return "O aluno está estudando Front-end.";
    }
    if (pagina.includes("aback")) {
        return "O aluno está estudando Back-end.";
    }
    if (pagina.includes("adb")) {
        return "O aluno está estudando Banco de Dados.";
    }
    if (pagina.includes("alogica")) {
        return "O aluno está estudando Lógica de Programação.";
    }
    if (pagina.includes("aux")) {
        return "O aluno está estudando UX/UI.";
    }
    if (pagina.includes("ia")) {
        return "O aluno está estudando Inteligência Artificial.";
    }
    return "O aluno está navegando pela plataforma StarDev.";
}
// Monta todo o contexto que será enviado para a IA
function montarContexto({
    historico = [],
    pagina = ""
}) {
    return {
        baseConhecimento: obterBaseConhecimento(),
        contextoPagina: obterContextoPagina(pagina),
        historico
    };
}
module.exports = {
    montarContexto
};