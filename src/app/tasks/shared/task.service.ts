import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ITask} from './task.model';

@Injectable()
export class TaskService {

  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Basic dXJzOjEyMw==',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // XXX shouldn't be hardcoded
    });

  private options = new RequestOptions({headers: this.headers});

  private taskURL = 'http://localhost:8080/tasks'; // XXX with docker use 138.68.85.173

  constructor(private http: Http) {
  }

  getTasks(filter?: string): Promise<ITask[]> {
    const url = `${this.taskURL}/`;
    return this.http
      .get(url + this.urlByFilter(filter), this.options)
      .toPromise()
      .then(response => response.json()._embedded.tasks as ITask[])
      .catch(this.handleError);
  }

  private urlByFilter(filter: string) {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const todayInOneWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    switch (filter) {
      case 'today': {
        return 'search/findAllByDueDateAfterAndDueDateBefore?after=' +
        yesterday.toJSON().split('T')[0] + '&before=' + tomorrow.toJSON().split('T')[0];
      }
      case 'week': {
        return 'search/findAllByDueDateAfterAndDueDateBefore?after=' +
        yesterday.toJSON().split('T')[0] + '&before=' + todayInOneWeek.toJSON().split('T')[0];
      }
      case 'overdue': {
        return 'search/findAllByDueDateBefore?before=' + today.toJSON().split('T')[0];
      }
      default: {
        return '';
      }
    }
  }

  getTask(id: number): Promise<ITask> {
    const url = `${this.taskURL}/${id}`;
    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => response.json() as ITask)
      .catch(this.handleError);
  }

  create(task: ITask): Promise<number> {
    const url = `${this.taskURL}/`;
    return this.http
      .post(url, JSON.stringify(task), this.options)
      .toPromise().then(response => +response.headers.get('Location').split('/').pop())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.taskURL}/${id}`;
    return this.http
      .delete(url, this.options)
      .toPromise().then(value => null)
      .catch(this.handleError);
  }

  update(task: ITask): Promise<ITask> {
    const url = `${this.taskURL}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), this.options)
      .toPromise()
      .then(response => task)
      .catch(this.handleError);
  }

  setChecked(id: number, check: boolean): Promise<boolean> {
    const url = `${this.taskURL}/${id}/${check ? 'check' : 'uncheck'}`;
    return this.http
      .post(url, {}, this.options)
      .toPromise()
      .then(response => response.status === 200)
      .catch(this.handleError);
  }

  getTaskChildren(id: number): Promise<ITask[]> {
    const url = `${this.taskURL}/${id}/children`;
    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => (response.json()._embedded) ? response.json()._embedded.tasks as ITask[] : [] as ITask[])
      .catch(this.handleError);
  }

  setTaskParent(task: ITask, parent: ITask): Promise<boolean> {
    const url = `${this.taskURL}/${task.id}/parent?parent_id=${parent.id}`;
    return this.http
      .post(url, {}, this.options)
      .toPromise()
      .then(response => response.status === 200)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // XXX fix
    return Promise.reject(error.message || error);
  }
}
