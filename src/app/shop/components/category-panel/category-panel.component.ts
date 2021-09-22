import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ICategories, ISubCategories } from 'src/app/core/models/categories-model';
import { selectVideosItemState, selectVideosState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ShopService } from '../../services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss'],
})
export class CategoryPanelComponent {
  categoryName = '';

  categoryId = '';

  categories?:ICategories[] ;

  subCategories?:ISubCategories[];

  constructor(private store: Store<AppState>, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    private shopService:ShopService, private router:Router) {
    store.pipe(select(selectVideosState)).subscribe(data=>{
      this.categories = data;
      this.subCategory('Бытовая техника', 'appliances');
    });
    this.matIconRegistry.addSvgIcon(
      'appliances',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/appliances.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'computers-peripherals',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/computers-peripherals.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'electronics',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/electronics.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'furniture',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/furniture.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'hobbies',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/hobbies.svg'),
    );
  }

  subCategory(name:string, id:string){
    this.store.pipe(select(selectVideosItemState, { name })).subscribe(data=>{
      this.categoryName = name;
      this.subCategories = data?.subCategories;
      this.categoryId = id;
    });
  }

  navigateToCategory(categoryId:string){
    this.shopService.count$.next(10);
    this.router.navigate([`${this.categoryId}_${categoryId}`]);
  }

}
