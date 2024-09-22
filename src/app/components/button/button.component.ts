import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  // Propriedade de entrada para o texto do botão, valor vazio como padrão
@Input() text: string = ''; 

// Propriedade de entrada para a cor do botão
@Input() color: string = ''; 

// Emissor de eventos para notificar cliques no botão
@Output() btnClick = new EventEmitter(); 

// Método chamado ao clicar no botão
onClick() {
    this.btnClick.emit(); // Emite o evento btnClick, permitindo que o componente pai reaja ao clique
}
}
