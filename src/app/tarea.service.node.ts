import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceNode {

  private TASK_API = 'http://127.0.0.1:3000/TaskApi/api/task/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.TASK_API);
  }

  updateTask(tarea: Tarea): void {
    this.http.put<Tarea>(this.TASK_API + tarea.id, tarea).subscribe(response => console.log(response.id, ' actualizada'));
  }

  deleteTask(tarea: Tarea): void {
    this.http.delete<Tarea>(this.TASK_API + tarea.id).subscribe(response => console.log(tarea.id, ' borrada'));
  }

  addTask(nombreTarea: string): Observable<Tarea> {
    var tarea = new Tarea();
    tarea.nombre = nombreTarea;
    return this.http.post<Tarea>(this.TASK_API, tarea);
  }
}
