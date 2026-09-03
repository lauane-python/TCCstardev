/**
 * ==========================================================================
 * CONFIGURAÇÃO GLOBAL — STARDEV FRONT-END
 * ==========================================================================
 * Altere API_BASE para o endereço onde o back-end (pasta /back do projeto)
 * estiver rodando. Por padrão o server.js sobe em http://localhost:3000
 *
 * Se o time preferir usar a intranet do laboratório (IP fixo, como o
 * 10.111.9.9 citado no server.js), basta trocar o valor abaixo.
 * ==========================================================================
 */
const STARDEV_CONFIG = {
  API_BASE: "http://localhost:3000",
  CHAVE_TOKEN: "stardev_token",
  CHAVE_USUARIO: "stardev_usuario",
};

/** Monta a URL completa de um endpoint do back-end */
function apiUrl(caminho) {
  return `${STARDEV_CONFIG.API_BASE}${caminho.startsWith("/") ? "" : "/"}${caminho}`;
}
