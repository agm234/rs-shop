import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderNavigationComponent,
    CategoryNavigationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HeaderNavigationComponent,
  ],
})
export class CoreModule { }
