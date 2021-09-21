import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[ LoginFormComponent],
})
export class AuthModule { }
