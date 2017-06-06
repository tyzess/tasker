import {Component, EventEmitter, Output} from '@angular/core';

import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  @Output() createTask = new EventEmitter();

  today = new Date().toJSON().split('T')[0];

  constructor(private taskService: TaskService) {
  }

  create(form: NgForm) {
    const task: ITask = form.value;
    this.taskService.create(task).then(newTaskId => {
      task.id = newTaskId;
      this.createTask.emit(task);
      form.reset();
    });
  }

}
