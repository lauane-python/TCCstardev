function validarMensagem(texto) {
    if (!texto) {
        return false;
    }
    if (texto.trim() === "") {
        return false;
    }
    if (texto.length > 500) {
        return false;
    }
    return true;
}
module.exports = validarMensagem;