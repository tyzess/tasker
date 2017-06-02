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
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

  private options = new RequestOptions({headers: this.headers});

  private taskURL = 'http://localhost:8080/tasks';

  constructor(private http: Http) {
  }

  getTasks(): Promise<ITask[]> {
    const url = `${this.taskURL}/`;
    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => response.json()._embedded.tasks as ITask[])
      .catch(this.handleError);
  }

  getTask(id: number): Promise<ITask> {
    const url = `${this.taskURL}/${id}`;
    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => response.json() as ITask)
      .catch(this.handleError);
  }

  create(task: ITask): Promise<ITask> {
    const url = `${this.taskURL}/`;
    return this.http
      .post(url, JSON.stringify(task), this.options)
      .toPromise()
      .then(response => response.json())
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
      .then((response) => {
        console.log('Updated task with id: ' + task.id);
        console.log(response.json());
        return task;
      })
      .catch(this.handleError);
  }

  setChecked(id: number, check: boolean): Promise<boolean> {
    const url = `${this.taskURL}/${id}/${check ? 'check' : 'uncheck'}`;
    return this.http
      .post(url, {}, this.options)
      .toPromise()
      .then(response => {
        console.log('Set task with id: ' + id + ' to checked: ' + check);
        console.log(response.status);
        return response.status === 200;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // XXX fix
    return Promise.reject(error.message || error);
  }
}
