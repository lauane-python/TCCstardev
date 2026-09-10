/**
 * ==========================================================================
 * CONFIGURAÇÃO GLOBAL DE API — STARDEV MOBILE
 * ==========================================================================
 * Equivalente mobile de front/assets/js/config.js
 *
 * IMPORTANTE — "10.111.9.64" NÃO funciona em dispositivo/emulador mobile:
 *   • Emulador Android Studio -> use "http://10.0.2.2:3000"
 *     (10.0.2.2 é como o emulador Android enxerga o "10.111.9.64" da sua máquina)
 *   • Celular físico com Expo Go -> use o IP da sua máquina na rede local,
 *     ex: "http://192.168.0.15:3000" (celular e PC precisam estar na mesma Wi-Fi)
 *   • iOS Simulator (Mac) -> "http://10.111.9.64:3000" funciona normalmente
 *
 * Troque o valor de API_BASE abaixo conforme o ambiente que for testar.
 * O back-end (pasta /back do projeto original) continua igual: ele já
 * escuta em app.listen(PORT) sem host fixo, então aceita conexões da rede.
 * ==========================================================================
 */
export const API_CONFIG = {
  // troque para o IP da sua máquina (ex.: "http://192.168.0.15:3000")
  // ou "http://10.0.2.2:3000" ao rodar no emulador do Android Studio
  API_BASE: "http://10.0.2.2:3000",
  CHAVE_TOKEN: "stardev_token",
  CHAVE_USUARIO: "stardev_usuario",
  TIMEOUT_MS: 12000,
};

/** Monta a URL completa de um endpoint do back-end */
export function apiUrl(caminho) {
  if (/^https?:\/\//i.test(caminho)) return caminho;
  return `${API_CONFIG.API_BASE}${caminho.startsWith("/") ? "" : "/"}${caminho}`;
}

/** fetch com timeout, pra não travar a tela caso o back-end esteja fora do ar */
export async function fetchComTimeout(url, options = {}, timeout = API_CONFIG.TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const resp = await fetch(url, { ...options, signal: controller.signal });
    return resp;
  } finally {
    clearTimeout(id);
  }
}

export default API_CONFIG;
