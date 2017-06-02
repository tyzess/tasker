import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ITask} from './shared/task.model';
import {TaskService} from './shared/task.service';

@Component({
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent implements OnInit {
  tasks: ITask[];

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
  }

  setCheckTask(task: ITask) {
    this.taskService.setChecked(task.id, task.checked);
  }

  deleteTask(id: number) {
    this.taskService.delete(id).then(() => {
      this.taskService.getTasks().then(allTasks => this.tasks = allTasks);
    });
  }

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data['tasks'];
  }

}
