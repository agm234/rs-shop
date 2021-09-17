import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { getItem } from 'src/app/redux/actions';
import { selectItemState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    item?:IShopItem[];
    slides?:string[];
  constructor(public routed:ActivatedRoute,private store: Store<AppState>,private shopService:ShopService) {
    this.routed.params.subscribe(( {id} ) => {
        this.store.dispatch(getItem({payload:id}));
     });
    this.store.pipe(select(selectItemState)).subscribe(data=>{
      this.item=data;
    })

  }

  ngOnInit(): void {

  }

}
