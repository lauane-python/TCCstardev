let historico = [];
function adicionarMensagem(mensagem) {
    historico.push(mensagem);
    if (historico.length > 10) {
        historico.shift();
    }
}
function obterHistorico() {
    return historico;
}
function limparHistorico() {
    historico = [];
}
module.exports = {
    adicionarMensagem,
    obterHistorico,
    limparHistorico
};