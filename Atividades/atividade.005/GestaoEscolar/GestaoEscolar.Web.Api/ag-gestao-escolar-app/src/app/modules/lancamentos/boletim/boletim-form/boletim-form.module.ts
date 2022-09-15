import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoletimFormRoutingModule } from './boletim-form-routing.module';
import { BoletimFormComponent } from './boletim-form.component';

@NgModule({
  declarations: [
    BoletimFormComponent
  ],
  imports: [
    CommonModule,
    BoletimFormRoutingModule,
    FormsModule,
  ]
})
export class BoletimFormModule { }
