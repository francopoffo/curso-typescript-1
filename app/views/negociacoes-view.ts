import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model
              .lista()
              .map((item) => {
                return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.valor.toFixed(2)}</td>
                <tr/>
                `;
              })
              .join("")}
            </tbody>
        </table>
        `;
  }

  update(model: Negociacoes): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
