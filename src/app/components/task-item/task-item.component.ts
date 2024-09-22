import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  // Propriedade de entrada para receber a tarefa do componente pai (task)
  @Input() tarefa!: Tarefa; 

  // Notificar quando uma tarefa deve ser deletada
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); 

  // Notificar quando o status de conclusão da tarefa deve ser alternado
  @Output() onToggleConcluido = new EventEmitter<Tarefa>(); 

  // Referência ao ícone de "times" do Font Awesome
  faTimes = faTimes;

  // Método chamado para deletar uma tarefa
  onDelete(tarefa: Tarefa) {
      this.onDeleteTask.emit(tarefa); 
  }

  // Método chamado para alternar o status de conclusão da tarefa
  onToggle(tarefa: Tarefa) {
      this.onToggleConcluido.emit(tarefa); 
  }
}
