import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoletimListRoutingModule } from './boletim-list-routing.module';
import { BoletimListComponent } from './boletim-list.component';

@NgModule({
  declarations: [
    BoletimListComponent
  ],
  imports: [
    CommonModule,
    BoletimListRoutingModule,
    FormsModule
  ]
})
export class BoletimListModule { }
