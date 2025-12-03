// src/app/lib/scroll-reveal.ts
export function applyScrollReveal() {
  // Seleciona todos os elementos que têm o atributo data-reveal
  const elements = document.querySelectorAll("[data-reveal]");

  // Cria um observador que “vê” quando o elemento entra na tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quando o elemento entra no viewport, adiciona a classe
          entry.target.classList.add("reveal-active");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observa cada elemento marcado com data-reveal
  elements.forEach((el) => observer.observe(el));
}
