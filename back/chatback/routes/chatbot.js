const express = require("express");
const router = express.Router();
const gerarResposta = require(
    "../services/ollamaService"
);
const validarMensagem = require(
    "../utils/validarMensagem"
);
const {
    adicionarMensagem,
    obterHistorico
} = require("../utils/memoria");
/*CHAT DEV MENTOR*/
router.post(
    "/chat",
    async (req, res) => {
        try {
            const { message, pagina } = req.body;
            const mensagemValida =
                validarMensagem(message);
            if (!mensagemValida) {
                return res.status(400).json({
                    reply: "Mensagem inválida."
                });
            }
            const historico =
                obterHistorico();
            let contextomateria = "";
            if (pagina.includes("afront")) {
                contextomateria =
                    "O aluno está estudando Front-end.";
            }
            else if (pagina.includes("aback")) {
                contextomateria =
                    "O aluno está estudando Back-end.";
            }
            else if (pagina.includes("adb")) {
                contextomateria =
                    "O aluno está estudando Banco de Dados.";
            }
            else if (pagina.includes("alogica")) {
                contextomateria =
                    "O aluno está estudando Lógica de Programação.";
            }
            else {
                contextomateria =
                    "O aluno está navegando pela plataforma StarDev.";
            }
            const resposta =
                await gerarResposta(
                    message,
                    historico,
                    contextomateria
                );
            adicionarMensagem(
                `Aluno: ${message}`
            );
            adicionarMensagem(
                `Dev Mentor: ${resposta}`
            );
            return res.json({
                reply: resposta
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                reply: "Erro interno no chatbot."
            });
        }
    }
);
module.exports = router;