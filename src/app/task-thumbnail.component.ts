import {Component, Input} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task-thumbnail',
  templateUrl: './task-thumbnail.component.html'
})

export class TaskThumbnailComponent {
  @Input() task: Task;

  // setChecked(task): void {
  //   this.taskService.setChecked(task.id, task.checked);
  // }
  //
  // delete(task): void {
  //   this.taskService.delete(task.id);
  // }

}
