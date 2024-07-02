import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button',
  // templateUrl: './card-button.component.html',
  template: `<button class="card-button">Adquirir</button>`, // utilizando template inline
  styleUrl: './card-button.component.scss',
//   styles: [ // utilizando styles inline
//     `
//     .card-button {
//     font-size: 16px;
//     text-align: center;
//     margin-top: 10px;
//     border-radius: 25px;
//     background-color: white;
//     cursor: pointer;
//     transition: .7s;
//     padding: 10px;
//     width: 100%;
    
//     &:hover {
//         transition: .7s;
//         background-color: black; // cor de fundo ao passar o mouse
//         color: white;
//         transform: scale(1.03); // aumenta o tamanho ao passar o mouse
//     }
// }
//     `
//   ]
})
export class CardButtonComponent {

}
