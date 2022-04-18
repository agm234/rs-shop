import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent  {
  form:FormGroup;

  constructor(public dialogRef: MatDialogRef<RegisterFormComponent>,
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
    this.dialogRef.close();
  }
}
