import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {

  constructor(private router: Router, private taskService: TaskService) {
  }

  createTask(task: ITask) {
    console.log('Form value: ' + task);
    this.taskService.create(task);
    // this.router.navigate(['tasks']);
  }
}
