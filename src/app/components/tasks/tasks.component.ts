import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  // Array para armazenar as tarefas
  tarefas: Tarefa[] = [];

  // Construtor do componente, que injeta o serviço de tarefas
  constructor(private taskService:TaskService){}

  // Método do ciclo de vida do Angular, chamado ao inicializar o componente
  ngOnInit(): void {
  
    // Chama o serviço para obter as tarefas do backend
    this.taskService.getTasks().subscribe((data) => {
      this.tarefas = data;
      console.log(data);
    });
  }

  // Método para deletar uma tarefa
  deleteTask(tarefa:Tarefa){
    // Chama o serviço para deletar a tarefa no backend
    this.taskService.deleteTask(tarefa).subscribe(() =>
      // Atualiza o array de tarefas filtrando a tarefa deletada
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  // Método para alternar o status de conclusão de uma tarefa
  toggleConcluido(tarefa:Tarefa){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }

  // Método para adicionar uma nova tarefa
  addTask(tarefa:Tarefa){
    this.taskService.addTask(tarefa).subscribe((tarefa) =>
      this.tarefas.push(tarefa));
  }
}
