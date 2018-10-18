import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private TASK_API = 'http://192.168.56.1:8080/TaskApi/api/task/';
  //private TASK_API = 'http://localhost:3000/task/';

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
