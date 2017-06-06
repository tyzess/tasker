import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import {TaskService} from './task.service';
import {ITask} from './task.model';

@Injectable()
export class TaskResolver implements Resolve<ITask> {

  constructor(private taskService: TaskService) {
  }

  resolve(route: ActivatedRouteSnapshot): ITask | Observable<ITask> | Promise<ITask> {
    return this.taskService.getTask(route.params['id']);
  }
}
