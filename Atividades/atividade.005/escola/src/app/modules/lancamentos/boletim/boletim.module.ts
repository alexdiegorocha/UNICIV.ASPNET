import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoletimFormModule } from './boletim-form/boletim-form.module';
import { BoletimListModule } from './boletim-list/boletim-list.module';
import { BoletimRoutingModule } from './boletim-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BoletimRoutingModule,
    BoletimFormModule,
    BoletimListModule,
    FormsModule
  ]
})
export class BoletimModule { }
