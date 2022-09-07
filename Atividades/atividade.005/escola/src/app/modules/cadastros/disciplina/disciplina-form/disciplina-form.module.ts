import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaFormRoutingModule } from './disciplina-form-routing.module';
import { DisciplinaFormComponent } from './disciplina-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DisciplinaFormComponent
  ],
  imports: [
    CommonModule,
    DisciplinaFormRoutingModule,
    FormsModule
  ]
})
export class DisciplinaFormModule { }
