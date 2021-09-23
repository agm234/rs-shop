import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

import { IOrder } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';
import { RefactorOrderComponent } from '../refactor-order/refactor-order.component';

@Component({
  selector: 'app-waitlist-item',
  templateUrl: './waitlist-item.component.html',
  styleUrls: ['./waitlist-item.component.scss'],
})
export class WaitlistItemComponent {

  @Input() item?:IOrder;

  constructor(public dialog: MatDialog, private shopService:ShopService, private store: Store<AppState>){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RefactorOrderComponent, {
      data:(this.item as IOrder).id,
    });
    dialogRef.afterClosed().subscribe();

  }

  delete(id:string | undefined){
    this.shopService.deleteOrder(id as string);
    this.store.dispatch(getUserInfo());
  }
}
