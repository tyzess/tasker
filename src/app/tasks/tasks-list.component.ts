import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITask} from './shared/task.model';

@Component({
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent implements OnInit {
  tasks: ITask[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data['tasks'];
  }

}
