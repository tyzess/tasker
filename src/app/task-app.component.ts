import {Component} from '@angular/core';
import {AuthService} from "./user/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.css']
})

export class TaskAppComponent {
  title = 'Tasker';

  constructor(private auth: AuthService) {}
}
