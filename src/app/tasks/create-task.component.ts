import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  today = new Date().toJSON().split('T')[0];

  constructor(private router: Router, private taskService: TaskService) {
  }

  createTask(task: ITask) {
    this.taskService.create(task).then(newTask => this.router.navigate(['tasks', newTask.id]));
  }

}
