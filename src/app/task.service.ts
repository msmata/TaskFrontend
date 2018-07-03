import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private userApi = 'http://192.168.0.104:8080/TaskApi/api/task/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.userApi);
  }

  deleteTask(id: number):void {
    this.http.delete(this.userApi + id).subscribe(response => console.log('Tarea borrada'));
  }

  saveTask(taskName: string){
    var task = new Task();
    task.nombre = taskName;
    this.http.post(this.userApi, task).subscribe(response => console.log('Tarea guardada'));
  }
}
