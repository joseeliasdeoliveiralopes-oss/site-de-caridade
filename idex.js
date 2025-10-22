// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌍 Site de Caridade carregado com sucesso!");

  // ======= VARIÁVEIS GERAIS =======
  const formContato = document.querySelector("#form-contato");
  const formDoacao = document.querySelector("#form-doacao");
  const formVoluntario = document.querySelector("#form-voluntario");

  // ======= MENU MOBILE =======
  const menuBtn = document.querySelector("#menu-btn");
  const navMenu = document.querySelector("nav ul");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("ativo");
    menuBtn.classList.toggle("aberto");
  });

  // ======= FORMULÁRIO DE CONTATO =======
  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = formContato.querySelector("#nome").value.trim();
      const email = formContato.querySelector("#email").value.trim();
      const mensagem = formContato.querySelector("#mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
      formContato.reset();
    });
  }

  // ======= FORMULÁRIO DE DOAÇÃO =======
  if (formDoacao) {
    formDoacao.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = parseFloat(formDoacao.querySelector("#valor").value);
      const metodo = formDoacao.querySelector("#metodo").value;

      if (!valor || valor <= 0) {
        alert("Digite um valor válido para doar!");
        return;
      }

      // Simula pagamento (poderá integrar Pix/Stripe futuramente)
      alert(`💖 Doação de R$${valor.toFixed(2)} via ${metodo} registrada!`);
      formDoacao.reset();
    });
  }

  // ======= FORMULÁRIO DE VOLUNTARIADO =======
  if (formVoluntario) {
    formVoluntario.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = formVoluntario.querySelector("#nome-voluntario").value.trim();
      const email = formVoluntario.querySelector("#email-voluntario").value.trim();

      if (!nome || !email) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      alert(`👏 Obrigado, ${nome}! Em breve entraremos em contato.`);
      formVoluntario.reset();
    });
  }

  // ======= SCROLL SUAVE =======
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const alvo = document.querySelector(link.getAttribute("href"));
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // ======= ANIMAÇÃO AO ROLAR (FADE IN) =======
  const elementosAnimados = document.querySelectorAll(".animar");

  function animarScroll() {
    const posicaoTela = window.innerHeight * 0.8;
    elementosAnimados.forEach((el) => {
      const topoElemento = el.getBoundingClientRect().top;
      if (topoElemento < posicaoTela) {
        el.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animarScroll);
  animarScroll(); // Chamada inicial
});
