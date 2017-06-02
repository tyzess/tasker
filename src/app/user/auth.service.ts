import {Http} from '@angular/http';
import {IUser} from './user.model';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: Http) {

  }


  isAuthenticated(): boolean {
    return false;
}

  loginUser() {}

  updateUser() {

  }

  logoutUser() {}
}
