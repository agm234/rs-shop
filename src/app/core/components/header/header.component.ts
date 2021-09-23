import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
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
    this.store.dispatch(getUserInfo());
    this.location.getLocation(this.location.getIP()).subscribe(data=>{
      this.city = data.city;
    },

    );
  }


}
