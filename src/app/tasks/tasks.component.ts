import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[];
  showNewTask: boolean;

  ngOnInit() {
    this.getTasks();
    this.showNewTask = false;
  }

  agregarTask() {
    this.showNewTask = !this.showNewTask;
  }

  getTasks(){
    this.taskService.getTasks().subscribe(response => this.tasks = response);
  }

  deleteTask(id: number){

    var task:Task = this.tasks.filter(task => task.id === id)[0];

    if (confirm("Confirma que desea borrar la tarea " + task.nombre + "?")){
      this.taskService.deleteTask(id);
    }
  }
}
