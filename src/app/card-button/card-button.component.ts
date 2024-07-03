import { Component, EventEmitter, Output } from '@angular/core';

interface IPlano{
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: `<button class="card-button">Adquirir</button>`, // utilizando template inline
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Output() buttonClick = new EventEmitter<IPlano>(); // o output vai emitir um evento para o componente pai
  clickDoBotao() {
    this.buttonClick.emit({infos: {tipo: 'Simples', preco: 100}}); // chamando o output
  }

}
