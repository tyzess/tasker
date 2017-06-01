import { Routes } from '@angular/router';
import {TasksListComponent} from './tasks-list.component';
import {TaskDetailsComponent} from './task-details.component';
import {CreateTaskComponent} from './create-task.component';

export const appRoutes: Routes = [
  { path: 'tasks/new', component: CreateTaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'tasks', component: TasksListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full'}
]
