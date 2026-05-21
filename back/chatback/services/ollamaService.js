const axios = require("axios");
const fs = require("fs");
const path = require("path");
/*BASE DE CONHECIMENTO*/
const caminhoBase = path.join(
    __dirname,
    "../data/base_conhecimento.txt"
);
const contextoBase = fs.readFileSync(
    caminhoBase,
    "utf-8"
);
/*OLLAMA SERVICE*/
async function gerarResposta(
    pergunta,
    historico
) {
    try {
        const prompt = `
Você é a Dev Mentor.
Você é a IA oficial da plataforma Stardev.
Seu objetivo é:
- ajudar alunos
- responder dúvidas de programação
- explicar conceitos
- ajudar sobre aulas
- ajudar sobre o sistema da plataforma
Você responde de forma:
- moderna
- amigável
- objetiva
- clara
- organizada
Nunca invente funcionalidades inexistentes.
CONTEXTO DA STARDEV:
${contextoBase}
HISTÓRICO:
${historico.join("\n")}
PERGUNTA DO ALUNO:
${pergunta}
RESPOSTA DA DEV MENTOR:
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
        return "Erro ao conectar com a IA.";
    }
}
module.exports = gerarResposta;