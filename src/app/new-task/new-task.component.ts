import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() taskName: string;

  constructor(private taskService: TaskService) {  }

  ngOnInit() {
  }

  grabarTarea(){
    if (confirm("Confirma que desea guardar la tarea?")){
      this.taskService.saveTask(this.taskName);
    }
  }
}
