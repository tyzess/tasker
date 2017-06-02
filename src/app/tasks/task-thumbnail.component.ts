import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-task-thumbnail',
  templateUrl: './task-thumbnail.component.html'
})

export class TaskThumbnailComponent {
  @Input() task: ITask;
  @Output() deleteTask = new EventEmitter();

  // setChecked(task): void {
  //   this.taskService.setChecked(task.id, task.checked);
  // }

  delete(task): void {
    this.deleteTask.emit(task.id);
  }

}
