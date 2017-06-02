import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TaskAppComponent } from './task-app.component';
import { appRoutes } from './routes';

import { TasksListComponent } from './tasks/tasks-list.component';
import { TaskThumbnailComponent } from './tasks/task-thumbnail.component';
import { TaskDetailsComponent } from './tasks/task-details.component';
import { CreateTaskComponent } from './tasks/create-task.component';
import { TaskService } from './tasks/shared/task.service';

import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    TaskAppComponent,
    TasksListComponent,
    TaskThumbnailComponent,
    TaskDetailsComponent,
    CreateTaskComponent
  ],
  providers: [
    TaskService,
    AuthService ],
  bootstrap: [ TaskAppComponent ]
})
export class AppModule { }
