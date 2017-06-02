import {Component, OnInit} from '@angular/core';
import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';

@Component({
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent implements OnInit {

  tasks: ITask[];

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
