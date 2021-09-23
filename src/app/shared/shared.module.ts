import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
