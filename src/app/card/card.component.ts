import { Component, Input } from '@angular/core';

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
  // plano:IPlano = {
  //   infos: {
  //     tipo: '',
  //     preco: 100
  //   }
  // }
  @Input() planType: string = ""; // criar inputs tipados passo 1
  @Input() planPrice: number = 0;

}
