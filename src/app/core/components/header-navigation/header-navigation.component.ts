import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginFormComponent } from 'src/app/auth/components/login-form/login-form.component';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  navigate(){
      this.router.navigate(['CategoryPanel'])
  }
  navigateToMainPage(){
      this.router.navigate([''])
  }
  openDialog(): void {
      console.log(13123123)
    const dialogRef = this.dialog.open(LoginFormComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  navigateToSelect(){
      this.router.navigate(["select"])
  }
}
