import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
    ],
})
export class MaterialModule { }
