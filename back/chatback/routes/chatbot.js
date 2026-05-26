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
            const resposta =
                await gerarResposta(
                    message,
                    historico
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