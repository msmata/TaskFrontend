import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private userApi = 'http://localhost:8080/TaskApi/api/task/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.userApi);
  }

  deleteTask(id: number):void {
    this.http.delete(this.userApi + id).subscribe(response => console.log('Tarea borrada'));
  }

  saveTask(taskName: string){
    var task = new Tarea();
    task.nombre = taskName;
    this.http.post(this.userApi, task).subscribe(response => console.log('Tarea guardada'));
  }
}
