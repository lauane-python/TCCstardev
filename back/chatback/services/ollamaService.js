/**
 * ==========================================
 * DEV MENTOR
 * OLLAMA SERVICE
 * ==========================================
 */
const axios = require("axios");
const {
    MODEL,
    URL,
    TEMPERATURE,
    MAX_TOKENS,
    STREAM,
    BOT_NAME,
    PLATFORM_NAME
} = require("../config/chatConfig");
// Gera uma resposta utilizando o Ollama
async function gerarResposta({
    pergunta,
    contexto
}) {
    const prompt = `
Você é a ${BOT_NAME}.
Você é a inteligência artificial oficial da plataforma ${PLATFORM_NAME}.
Seu objetivo é ensinar programação para estudantes iniciantes e intermediários.
Nunca diga que é o ChatGPT.
Nunca diga que é uma IA da OpenAI.
Nunca invente funcionalidades da plataforma.
Sempre responda em português do Brasil.
Explique de forma simples.
Quando possível, utilize exemplos.
Se o aluno pedir ajuda em programação, ensine passo a passo.
Se a pergunta não tiver relação com programação ou com a plataforma StarDev, responda educadamente que seu foco é auxiliar nos estudos de tecnologia.
==============================
BASE DE CONHECIMENTO
==============================
${contexto.baseConhecimento}
==============================
CONTEXTO DA PÁGINA
==============================
${contexto.contextoPagina}
==============================
HISTÓRICO DA CONVERSA
==============================
${contexto.historico.join("\n")}
==============================
PERGUNTA DO ALUNO
==============================
${pergunta}
==============================
RESPOSTA DA DEV MENTOR
==============================
`;
    try {
        const response = await axios.post(
            URL,
            {
                model: MODEL,
                prompt,
                stream: STREAM,
                options: {
                    temperature: TEMPERATURE,
                    num_predict: MAX_TOKENS
                }
            }
        );
        return response.data.response.trim();
    } catch (erro) {
        console.error("\n========== OLLAMA ==========");
        console.error(erro.message);
        if (erro.response) {
            console.error(erro.response.data);
        }
        console.error("============================\n");
        return "Desculpe, não consegui responder agora. Tente novamente em alguns instantes.";
    }
}
module.exports = gerarResposta;