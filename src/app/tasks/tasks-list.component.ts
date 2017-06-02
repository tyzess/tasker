import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITask} from './shared/task.model';
import {TaskService} from './shared/task.service';

@Component({
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent implements OnInit {
  tasks: ITask[];

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }


  deleteTask(id: number) {
    this.taskService.delete(id);
    console.log('deleted');
  }

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data['tasks'];
  }

}
