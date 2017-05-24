import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Task} from './task';

@Injectable()
export class TaskService {

  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Basic dXJzOjEyMw==',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

  private taskURL = 'http://localhost:8080/tasks';

  constructor(private http: Http) {
  }

  getTasks(): Promise<Task[]> {
    const url = `${this.taskURL}/`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json()._embedded.tasks as Task[];
      })
      .catch(this.handleError);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.taskURL}/${id}`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.taskURL}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Task> {
    return this.http
      .post(this.taskURL, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Task)
      .catch(this.handleError);
  }

  update(task: Task): Promise<Task> {
    const url = `${this.taskURL}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  setChecked(id: number, check: boolean): Promise<boolean> {
    const url = `${this.taskURL}/${id}/${check ? 'check' : 'uncheck'}`;
    return this.http
      .post(url, {}, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.status);
        return response.status === 200;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
