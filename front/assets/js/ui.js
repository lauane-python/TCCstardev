/**
 * ==========================================================================
 * UI — UTILITÁRIOS COMPARTILHADOS (toasts, loader, menu, scroll reveal)
 * ==========================================================================
 */

/** Mostra uma notificação flutuante (toast) no canto da tela */
function mostrarToast(mensagem, tipo = "ok", duracao = 4200) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = mensagem;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 250);
  }, duracao);
}

/** Esconde o loader de página assim que o DOM estiver pronto */
function esconderLoaderPagina() {
  const loader = document.querySelector(".loader-pagina");
  if (loader) setTimeout(() => loader.classList.add("escondido"), 350);
}

/** Liga o botão hambúrguer do header público */
function ativarMenuMobile() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-desktop");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("aberto"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("aberto")));
}

/** Liga o botão hambúrguer da intranet (área do aluno / admin) */
function ativarMenuIntranet() {
  const toggle = document.querySelector(".mobile-topbar button");
  const sidebar = document.querySelector(".app-sidebar");
  if (!toggle || !sidebar) return;
  toggle.addEventListener("click", () => sidebar.classList.toggle("aberta"));
}

/** Observa elementos .reveal e adiciona .visivel quando entram na tela */
function ativarScrollReveal() {
  const alvos = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || alvos.length === 0) {
    alvos.forEach((el) => el.classList.add("visivel"));
    return;
  }
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          obs.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  alvos.forEach((el) => obs.observe(el));
}

/** Marca o link de navegação ativo com base no arquivo atual da URL */
function marcarNavAtiva() {
  const paginaAtual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .app-nav-link").forEach((link) => {
    const href = link.getAttribute("href")?.split("#")[0];
    if (href === paginaAtual) link.classList.add("ativo");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  esconderLoaderPagina();
  ativarMenuMobile();
  ativarMenuIntranet();
  ativarScrollReveal();
  marcarNavAtiva();
});
