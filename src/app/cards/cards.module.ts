import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card2Component } from '../card2/card2.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CardButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    Card2Component,
    CardButtonComponent // não precisa exportar esse pois ele esta sendo usado dentro dos componentes de card
  ]
})
export class CardsModule { }
