import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITask} from './shared/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})

export class TaskDetailsComponent implements OnInit {
  task: ITask;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
  }

}
