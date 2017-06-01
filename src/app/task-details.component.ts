import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})

export class TaskDetailsComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskService.getTask(+this.activatedRoute.snapshot.params['id']).then(task => this.task = task);
  }

}
