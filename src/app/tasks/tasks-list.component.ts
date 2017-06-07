import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ITask} from './shared/task.model';
import {TaskService} from './shared/task.service';

@Component({
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent implements OnInit {
  tasks: ITask[];
  selectedTask: ITask;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
    route.queryParams.subscribe(
      params => this.taskService.getTasks(params['filter']).then(allTasks => this.tasks = allTasks));
  }

  setCheckTask(task: ITask) {
    this.taskService.setChecked(task.id, task.checked);
  }

  createTask(task: ITask) {
    this.taskService.getTasks(this.route.queryParams['filter']).then(allTasks => this.tasks = allTasks);
    this.selectedTask = task;
  }

  deleteTask(id: number) {
    this.taskService.delete(id).then(() => {
      this.taskService.getTasks(this.route.queryParams['filter']).then(allTasks => this.tasks = allTasks);
    });
  }

  selectTask(task: ITask) {
    this.selectedTask = task;
  }

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data['tasks'];
  }

}
