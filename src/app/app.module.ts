import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CardsEffects } from './redux/effects/shop.effects';
import { cardsReducer } from './redux/reducers';
import { ShopModule } from './shop/shop.module';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'angular-crumbs';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShopModule,
    BreadcrumbModule,
    HttpClientModule,
    BrowserModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({ categories: cardsReducer }),
    EffectsModule.forRoot([CardsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
