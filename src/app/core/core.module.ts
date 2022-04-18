import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
    CategoryNavigationComponent
} from './components/category-navigation/category-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {
    HeaderNavigationComponent
} from './components/header-navigation/header-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderNavigationComponent,
    CategoryNavigationComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HeaderNavigationComponent,
    SearchComponent,
  ],
})
export class CoreModule { }
