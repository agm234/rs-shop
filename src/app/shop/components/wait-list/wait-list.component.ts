import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { selectUserInfo } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';

import { IOrder } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss'],
})
export class WaitListComponent implements OnInit {
  items?: IOrder[] | null;


  constructor(private store: Store<AppState>, private shopService:ShopService) {

  }

  ngOnInit(){
    if (localStorage.getItem('token')) {
      this.store.dispatch(getUserInfo());
    }
    this.store.pipe(select(selectUserInfo)).subscribe(data=>{
      data.forEach(element=>{
        this.items = element.orders;
      });
    });
  }
}
