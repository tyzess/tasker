import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  @Output() createTask = new EventEmitter();

  today = new Date().toJSON().split('T')[0];

  constructor(private router: Router, private taskService: TaskService) {
  }

  create(task: ITask) {
    this.taskService.create(task).then(newTaskId => {
      task.id = newTaskId;
      this.createTask.emit(task);
    });
    // XXX bug in taskService.create!!
  }

}
