import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa'

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  // URL da API para acessar as tarefas utilizando o json-server
  private urlApi = "http://localhost:3000/tasks";

  // Construtor do serviço que injeta o HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) {}

  // Método para obter a lista de tarefas utilizando o GET e o Observable com um array de tarefas
  getTasks() : Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.urlApi);
  }

  // Método para deletar uma tarefa utilizando o DELETE e passando o id da tarefa na URL
  deleteTask(tarefa:Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.urlApi}/${tarefa.id}`);
  }

  // Método para atualizar uma tarefa utilizando o put para atualizar a tarefa
  updateTask(tarefa:Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.urlApi}/${tarefa.id}`,tarefa);
  }

  // Método para adicionar uma nova tarefa utilizando o post passando o objeto da nova tarefa
  addTask(tarefa:Tarefa){
    return this.http.post<Tarefa>(`${this.urlApi}`, tarefa)
  }
}
