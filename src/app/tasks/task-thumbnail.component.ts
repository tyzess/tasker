import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-task-thumbnail',
  templateUrl: './task-thumbnail.component.html'
})

export class TaskThumbnailComponent {
  @Input() task: ITask;
  @Output() deleteTask = new EventEmitter();
  @Output() setCheckTask = new EventEmitter();
  @Output() selectTask = new EventEmitter();

  setChecked(task): void {
    this.setCheckTask.emit(task);
  }

  delete(task): void {
    this.deleteTask.emit(task.id);
  }

  select(task): void {
    this.selectTask.emit(task);
  }

}
