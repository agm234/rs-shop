import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    form:FormGroup;
  constructor(public dialogRef: MatDialogRef<RegisterFormComponent>,public dialog: MatDialog,private auth:AuthService) {
    this.form = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        login: new FormControl(''),
        password: new FormControl(''),
      });
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
}
loginForm(){
    this.dialogRef.close();
        const dialogRef = this.dialog.open(LoginFormComponent, {
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
}
onSubmit(event:Event){
    event.preventDefault();
    this.auth.register(this.form?.value);
}
}
