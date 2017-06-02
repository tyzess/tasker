import {Component, OnInit} from '@angular/core';
import {TaskService} from './shared/task.service';
import {ITask} from './shared/task.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})

export class TaskDetailsComponent implements OnInit {
  task: ITask;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskService.getTask(+this.activatedRoute.snapshot.params['id']).then(task => this.task = task);
  }

}
