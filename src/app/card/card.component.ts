import { Component } from '@angular/core';

interface IPlano{
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // tipo = 'Simples'; interpolação
  // preco = 100;
  // getFullPrice() {
  //   return 'R$ ' + this.preco + ',00/Mês';
  // }
  plano:IPlano = {
    infos: {
      tipo: '',
      preco: 100
    }
  }
}
