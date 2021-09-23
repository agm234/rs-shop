import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { LoginFormComponent } from 'src/app/auth/components/login-form/login-form.component';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
})
export class HeaderNavigationComponent  {

  constructor(private router:Router, public dialog: MatDialog, private shopService:ShopService) { }


  navigate(){
    this.router.navigate(['CategoryPanel']);
  }

  navigateToMainPage(){
    this.router.navigate(['']);
  }

  openDialog(): void {
    this.dialog.open(LoginFormComponent, {
    });
  }

  navigateToSelect(){
    this.shopService.getUser();
    this.router.navigate(['select']);
  }

  navigateToBasket(){
    this.router.navigate(['basket']);
  }

  navigateToWaitList(){
    this.router.navigate(['waitlist']);
  }
}
