const axios = require("axios");
const fs = require("fs");
const path = require("path");
/*BASE CONHECIMENTO*/
const caminhoBase = path.join(
    __dirname,
    "../base_conhecimento/baseConhecimento.txt"
);
const contextoBase = fs.readFileSync(
    caminhoBase,
    "utf-8"
);
/*OLLAMA*/
async function gerarResposta(pergunta, historico) {
    try {
        const prompt = `
Você é a Stardev IA.
Você é uma assistente educacional.
Responda de forma:
- amigável
- objetiva
- profissional
- organizada
CONTEXTO STARDEV:
${contextoBase}
HISTÓRICO:
${historico.join("\n")}
PERGUNTA:
${pergunta}
RESPOSTA:
`;
        const response = await axios.post(
            "http://localhost:11434/api/generate",
            {
                model: "llama3",
                prompt: prompt,
                stream: false
            }
        );
        return response.data.response;
    } catch (error) {
        console.log(error);
        return "Erro ao conectar com IA";
    }
}
module.exports = gerarResposta;