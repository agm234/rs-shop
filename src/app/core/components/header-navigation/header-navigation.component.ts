import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
      this.router.navigate(['CategoryPanel'])
  }
  navigateToMainPage(){
      this.router.navigate([''])
  }
}
