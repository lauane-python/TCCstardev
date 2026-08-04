/**
 * ==========================================
 * DEV MENTOR
 * EMBEDDING SERVICE
 * ==========================================
 *
 * Nesta primeira versão o chatbot NÃO utiliza
 * embeddings.
 *
 * Este arquivo foi criado para manter a
 * arquitetura preparada para um futuro RAG
 * completo.
 */
const fs = require("fs");
const path = require("path");
const caminhoEmbeddings = path.join(
    __dirname,
    "../data/embeddings.json"
);
//Carrega os embeddings salvos.
function carregarEmbeddings() {
    try {
        if (!fs.existsSync(caminhoEmbeddings)) {
            return [];
        }
        const conteudo = fs.readFileSync(
            caminhoEmbeddings,
            "utf8"
        );
        if (!conteudo.trim()) {
            return [];
        }
        return JSON.parse(conteudo);
    } catch (erro) {
        console.error(
            "Erro ao carregar embeddings:",
            erro
        );
        return [];
    }
}
// Salva embeddings
function salvarEmbeddings(lista) {
    try {
        fs.writeFileSync(
            caminhoEmbeddings,
            JSON.stringify(
                lista,
                null,
                4
            ),
            "utf8"
        );
    } catch (erro) {
        console.error(
            "Erro ao salvar embeddings:",
            erro
        );
    }
}
// Gera embeddings
//  Ainda não implementado
async function gerarEmbeddings() {
    console.warn(
        "EmbeddingService: geração de embeddings ainda não implementada."
    );
    return [];
}
module.exports = {
    carregarEmbeddings,
    salvarEmbeddings,
    gerarEmbeddings
};