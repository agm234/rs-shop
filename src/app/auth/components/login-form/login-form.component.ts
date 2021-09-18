import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { RegisterFormComponent } from '../register-form/register-form.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    form:FormGroup;
    constructor(
        public dialogRef: MatDialogRef<LoginFormComponent>,public dialog: MatDialog,private auth:AuthService) {
            this.form = new FormGroup({
                login: new FormControl(''),
                password: new FormControl(''),
              });
        }

        ngOnInit(): void {
        }

        onNoClick(): void {
        this.dialogRef.close();
    }
    register(){
        this.dialogRef.close();
        const dialogRef = this.dialog.open(RegisterFormComponent, {
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
    }
    onSubmit(event:Event){
        event.preventDefault();
        this.auth.login(this.form?.value);
    }

}
