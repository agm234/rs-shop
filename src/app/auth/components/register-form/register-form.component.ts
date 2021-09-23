import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent  {
  form:FormGroup;

  constructor(public dialogRef: MatDialogRef<RegisterFormComponent>, private store: Store<AppState>,
    public dialog: MatDialog, private auth:AuthService) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loginForm(){
    this.dialogRef.close();
    this.dialog.open(LoginFormComponent, {
    });
  }

  onSubmit(event:Event){
    event.preventDefault();
    this.auth.register(this.form?.value);
    this.store.dispatch(getUserInfo());
    this.dialogRef.close();
  }
}
