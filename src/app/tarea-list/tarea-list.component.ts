import { Component, OnInit, Input } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {

  constructor(private tareaService: TareaService/*, private tareaNodeService: TareaServiceNode*/) { }

  tareas: Tarea[];

  @Input() nombreTarea: string;

  ngOnInit() {
    this.getTareas();
  }

  getTareas(): void {
    this.tareaService.getTasks().subscribe(tareas => this.tareas = tareas);
  }
/*
  getTareasNode(): void {
    this.tareaNodeService.getTasks().subscribe(tareas => this.tareas = tareas);
  }
*/
  marcarTareaFinalizada(tarea: Tarea) {
    var mensaje = tarea.finalizada ? 'Desea remover la marca de finalización?' : 'Desea marcar la tarea como finalizada?';

    if (confirm(mensaje)){
      tarea.finalizada = !tarea.finalizada;
      this.tareaService.updateTask(tarea);
    }
  }

  borrarTarea(tarea: Tarea){
    if (confirm('Desea borrar la tarea ' + tarea.nombre + '?')){
      this.tareas = this.tareas.filter(tareaLoop => tareaLoop.id !== tarea.id);
      this.tareaService.deleteTask(tarea);
    }
  }

  agregarTarea(){
    if (confirm('Confirma que desea agregar una tarea con el nombre: ' + this.nombreTarea)){
      var tareaNueva = new Tarea();
      tareaNueva.finalizada = false;
      tareaNueva.nombre = this.nombreTarea;
      this.tareaService.addTask(this.nombreTarea).subscribe(response => this.tareas.push(tareaNueva));
      this.nombreTarea = '';
    }
  }
}
