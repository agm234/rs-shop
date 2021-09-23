import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

import { AuthService } from '../../services/auth.service';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>, private store: Store<AppState>,
    public dialog: MatDialog, private auth:AuthService) {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  register(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegisterFormComponent, {
    });
    dialogRef.afterClosed().subscribe();
  }

  onSubmit(event:Event){
    event.preventDefault();
    this.auth.login(this.form?.value);
    this.store.dispatch(getUserInfo());
    this.dialogRef.close();
  }

}
