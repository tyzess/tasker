import {Component, OnInit} from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasker';
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => this.tasks = tasks);
  }

  setChecked(task): void {
    this.taskService.setChecked(task.id, task.checked);
  }

  delete(task): void {
    this.taskService.delete(task.id);
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
