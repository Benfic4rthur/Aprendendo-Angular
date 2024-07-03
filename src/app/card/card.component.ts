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
  @Input({required: true}) planType: string = ""; // criar inputs tipados passo 1
  @Input({required: true}) planPrice: number = 0; // o required e para o input ser obrigatorio
  botaoClicado(event : IPlano){
    this.planType = event.infos.tipo;
    this.planPrice = event.infos.preco;
  }
}
