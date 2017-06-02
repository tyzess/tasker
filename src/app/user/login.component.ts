import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

}
