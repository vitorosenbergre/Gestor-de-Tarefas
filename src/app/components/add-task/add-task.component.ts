import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  // Notifica quando uma nova tarefa é adicionada
  @Output() onAddTask = new EventEmitter<Tarefa>();

  // Amazenamento dos dados da tarefa
  tarefa: string = '';        
  categoria: string = '';      
  concluido: boolean = false;  
  mostrarAddTarefa: boolean = false; // Controla a exibição do formulário de adição de tarefas

  // Método para alterar a visibilidade do formulário de adição de tarefa
  AlteraVisualizacao(valor: boolean) {
      this.mostrarAddTarefa = valor; // Atualiza a propriedade mostrarAddTarefa com o valor fornecido
  }

  // Método chamado ao enviar o formulário
  onSubmit() {
      // Verifica se o nome da tarefa não está vazia
      if (!this.tarefa) {
          alert('Adicione uma tarefa!'); // Exibe um alerta se a tarefa estiver vazia
          return; 
      }

      // Cria um objeto novaTarefa com os dados atuais
      const novaTarefa = {
          tarefa: this.tarefa,      
          categoria: this.categoria, 
          concluido: this.concluido  
      }

      // Emite o evento onAddTask com a nova tarefa
      this.onAddTask.emit(novaTarefa);
    
      // Reseta os campos do formulário após a submissão
      this.tarefa = '';           
      this.categoria = '';        
      this.concluido = false;     
  }
}
