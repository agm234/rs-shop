import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/redux/state.models';

import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  city = '';

  constructor(private location:LocationService, private store: Store<AppState>){
    this.location.getCity();
    this.location.city$.subscribe(data=>{
      this.city = data;
    });
  }


}
