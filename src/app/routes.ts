import { Routes } from '@angular/router';

import {TasksListComponent} from './tasks/tasks-list.component';
import {TaskDetailsComponent} from './tasks/task-details.component';
import {CreateTaskComponent} from './tasks/create-task.component';
import {TaskResolver} from './tasks/shared/task-resolver';
import {TasksResolver} from './tasks/shared/tasks-resolver';

export const appRoutes: Routes = [
  { path: 'tasks', component: TasksListComponent, resolve: {tasks: TasksResolver}},
  { path: 'tasks/new', component: CreateTaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent, resolve: {task: TaskResolver}},
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
