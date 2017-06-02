import { Routes } from '@angular/router';

import {TasksListComponent} from './tasks/tasks-list.component';
import {TaskDetailsComponent} from './tasks/task-details.component';
import {CreateTaskComponent} from './tasks/create-task.component';

export const appRoutes: Routes = [
  { path: 'tasks/new', component: CreateTaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'tasks', component: TasksListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
