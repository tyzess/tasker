import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import {ITask} from './task.model';
import {TaskService} from './task.service';

@Injectable()
export class TasksResolver implements Resolve<ITask[]> {

  constructor(private taskService: TaskService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ITask[]> | Promise<ITask[]> | ITask[] {
    return this.taskService.getTasks(route.queryParams['filter']);
  }
}
