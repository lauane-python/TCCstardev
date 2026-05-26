const axios = require("axios");
const fs = require("fs");
const path = require("path");
/* BASE DE CONHECIMENTO */
const caminhoBase = path.join(
    __dirname,
    "../data/base_conhecimento.txt"
);
const contextoBase = fs.readFileSync(
    caminhoBase,
    "utf-8"
);
/* OLLAMA SERVICE */
async function gerarResposta(
    pergunta,
    historico
) {
    try {
        const prompt = `
Você é a Dev Mentor.
Você é a inteligência artificial oficial da plataforma StarDev.
Seu papel é ajudar estudantes iniciantes e intermediários em programação.
REGRAS IMPORTANTES:
- Responda SEMPRE em português do Brasil.
- Responda de forma curta e organizada.
- Nunca faça respostas gigantes.
- Explique como uma professora moderna.
- Seja amigável e motivadora.
- Use exemplos simples.
- NÃO use markdown.
- NÃO use símbolos como ###, **, -, etc.
- NÃO escreva código HTML quebrado.
- NÃO invente funcionalidades.
- NÃO fale como ChatGPT.
- NÃO diga "sou uma IA treinada".
- Quando o aluno pedir explicações:
  explique passo a passo.
- Quando perguntarem algo técnico:
  dê exemplos reais.
- Quando possível:
  relacione com as aulas da StarDev.
ESTILO DA RESPOSTA:
- natural
- moderna
- humana
- clara
- curta
- direta
CONTEXTO DA STARDEV:
${contextoBase}
HISTÓRICO:
${historico.join("\n")}
PERGUNTA DO ALUNO:
${pergunta}
RESPOSTA DA DEV MENTOR:
`;
        const response = await axios.post(
            "http://127.0.0.1:11434/api/generate",
            {
                model: "llama3",
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.7,
                    num_predict: 250
                }
            }
        );
        return response.data.response.trim();
    } catch (error) {
        console.log(error);
        return "Desculpe, ocorreu um erro ao conectar com a Dev Mentor.";
    }
}
module.exports = gerarResposta;