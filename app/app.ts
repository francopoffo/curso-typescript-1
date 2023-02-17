import { NegociacaoController } from "./controllers/negociacao-controller.js";

const form = document.querySelector(".form");
const negociacao = new NegociacaoController();
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    negociacao.adiciona();
  });
} else {
  throw new Error("Não foi possível iniciar a aplicação.");
}
