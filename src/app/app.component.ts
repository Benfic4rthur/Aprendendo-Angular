import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardPlanType = 'Simples'; // cria valores para os inputs passo 2
  cardPlanPrice = 100;

  tipoManual(tipo: string) {
    this.cardPlanType = tipo;
  }
  valorManual(preco: string) {
    if (isNaN(Number(preco))) {
      alert("Apenas números permitidos");
    } else {
      this.cardPlanPrice = Number(preco);
    }
  }
}
