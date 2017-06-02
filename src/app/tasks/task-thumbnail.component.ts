import {Component, Input} from '@angular/core';
import {ITask} from './shared/task.model';

@Component({
  selector: 'app-task-thumbnail',
  templateUrl: './task-thumbnail.component.html'
})

export class TaskThumbnailComponent {
  @Input() task: ITask;

  // setChecked(task): void {
  //   this.taskService.setChecked(task.id, task.checked);
  // }
  //
  // delete(task): void {
  //   this.taskService.delete(task.id);
  // }

}
