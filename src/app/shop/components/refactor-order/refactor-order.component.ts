import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

import { IDetails, IOrder } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

interface IForm{
  username: string;
  addres: string;
  phone: string;
  date: string;
  time: string;
  description: string;
}
@Component({
  selector: 'app-refactor-order',
  templateUrl: './refactor-order.component.html',
  styleUrls: ['./refactor-order.component.scss'],
})
export class RefactorOrderComponent  {
  order:IOrder = {} as IOrder ;

  form:FormGroup;

  details: IDetails = {
    name: '',
    address: '',
    phone: '',
    timeToDeliver: '',
    comment: '',
  };

  constructor(private shopService:ShopService, private router:Router, private store: Store<AppState>,
    public dialogRef: MatDialogRef<RefactorOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    this.form = new FormGroup({
      username: new FormControl(''),
      addres: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      description: new FormControl(''),

    });
  }



  onSubmit(event:Event){
    event.preventDefault();
    const data:IForm = this.form.value;
    const details = {} as IDetails;
    details.name = data.username;
    details.address = data.addres;
    details.phone = data.phone;
    details.timeToDeliver = data.date + data.time;
    details.comment = data.description;
    this.order.details = details;
    this.order.id = this.data;
    this.shopService.refactorOrder(this.order);
    this.store.dispatch(getUserInfo());
    this.dialogRef.close();
  }

}
