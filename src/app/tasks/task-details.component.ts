import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITask} from './shared/task.model';
import {TaskService} from './shared/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})

export class TaskDetailsComponent implements OnInit {
  private _task: ITask;
  children: ITask[];

  @Output() deleteTask = new EventEmitter();
  @Output() setCheckTask = new EventEmitter();

  setChecked(child): void {
    this.setCheckTask.emit(child);
  }

  delete(child): void {
    this.deleteTask.emit(child.id);
    this.children.splice(this.children.indexOf(child), 1); // XXX what if delete didn't return 200?
  }

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  @Input()
  set task(task: ITask) {
    this._task = task;
    if (task) {
      this.taskService.getTaskChildren(task.id).then(children => this.children = children);
    }
  }

  get task() {
    return this._task;
  }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
  }

}
