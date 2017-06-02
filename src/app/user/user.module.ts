import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes) ],
  declarations: [ LoginComponent ],
  providers: []
})

export class UserModule {}
