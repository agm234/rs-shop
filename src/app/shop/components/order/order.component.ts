import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],

})

export class OrderComponent {
  order:IOrder = {} as IOrder ;

  form:FormGroup;

  details: IDetails = {
    name: '',
    address: '',
    phone: '',
    timeToDeliver: '',
    comment: '',
  };

  constructor(private shopService:ShopService, private router:Router) {
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
    this.order.items = this.shopService.itemsArray;
    details.name = data.username;
    details.address = data.addres;
    details.phone = data.phone;
    details.timeToDeliver = data.date + data.time;
    details.comment = data.description;
    this.order.details = details;
    this.shopService.setOrder(this.order);
    this.router.navigate(['waitlist']);
  }
}
