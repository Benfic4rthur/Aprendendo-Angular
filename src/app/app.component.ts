import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardPlanType = 'Simples'; // cria valores para os inputs passo 2
  cardPlanPrice = 100;
}
