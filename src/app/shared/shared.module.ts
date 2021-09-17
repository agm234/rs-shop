import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule
  ],
  exports:[
    MaterialModule,
    NgbModule
  ]
})
export class SharedModule { }
