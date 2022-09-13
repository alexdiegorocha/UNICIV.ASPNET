import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaFormRoutingModule } from './turma-form-routing.module';
import { TurmaFormComponent } from './turma-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TurmaFormComponent
  ],
  imports: [
    CommonModule,
    TurmaFormRoutingModule,
    FormsModule
  ]
})
export class TurmaFormModule { }
