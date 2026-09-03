/**
 * ==========================================================================
 * MAIN.JS — PÁGINA INICIAL (index.html)
 * ==========================================================================
 */

/** Anima o "console" da hero digitando linhas de comando */
function iniciarTerminalHero() {
  const alvo = document.getElementById("terminalHero");
  if (!alvo) return;

  const linhas = [
    { prompt: "aluno@stardev", texto: "iniciar --trilha=front-end" },
    { resposta: "carregando módulos: html, css, javascript ✔" },
    { prompt: "aluno@stardev", texto: "nivel --escolher" },
    { resposta: "iniciante · intermediário · avançado" },
    { prompt: "aluno@stardev", texto: "abrir dev-mentor" },
    { resposta: "Dev Mentor pronta para te ajudar 24h ✔" },
  ];

  let indice = 0;
  function proximaLinha() {
    if (indice >= linhas.length) return;
    const linha = linhas[indice];
    const div = document.createElement("div");
    div.className = "terminal-linha";
    if (linha.prompt) {
      div.innerHTML = `<span class="terminal-prompt">${linha.prompt} $</span> ${linha.texto}`;
    } else {
      div.innerHTML = `<div class="terminal-resposta">${linha.resposta}</div>`;
    }
    alvo.appendChild(div);
    indice++;
    setTimeout(proximaLinha, linha.prompt ? 650 : 450);
  }
  setTimeout(proximaLinha, 500);

  // cursor piscando ao final
  setTimeout(() => {
    const cursor = document.createElement("span");
    cursor.className = "cursor-piscante";
    alvo.appendChild(cursor);
  }, 500 + linhas.length * 650);
}

/** Liga a validação e o envio do formulário de contato (POST /contato) */
function iniciarFormContato() {
  const form = document.getElementById("formContato");
  if (!form) return;
  const aviso = document.getElementById("contatoAviso");
  const botao = document.getElementById("btnEnviarContato");

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    aviso.className = "form-aviso";

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const comentario = form.comentario.value.trim();

    if (nome.length < 6 || email.length < 6 || comentario.length < 10) {
      aviso.textContent = "Confira os campos: nome completo, e-mail válido e uma mensagem com pelo menos 10 caracteres.";
      aviso.classList.add("mostrar", "erro");
      return;
    }

    botao.disabled = true;
    botao.textContent = "Enviando...";

    try {
      const resp = await fetch(apiUrl("/contato"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, comentario }),
      });
      const dados = await resp.json();
      const sucesso = /sucesso/i.test(dados.resposta || "");

      aviso.textContent = dados.resposta || "Não foi possível enviar sua mensagem.";
      aviso.classList.add("mostrar", sucesso ? "ok" : "erro");
      if (sucesso) {
        mostrarToast("Mensagem enviada com sucesso!", "ok");
        form.reset();
      }
    } catch (erro) {
      aviso.textContent = "Não foi possível falar com o servidor da StarDev. Verifique se o back-end está rodando.";
      aviso.classList.add("mostrar", "erro");
    } finally {
      botao.disabled = false;
      botao.textContent = "Enviar mensagem";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarTerminalHero();
  iniciarFormContato();
});
