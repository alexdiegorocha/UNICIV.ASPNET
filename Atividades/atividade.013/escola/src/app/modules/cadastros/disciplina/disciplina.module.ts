import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DisciplinaComponent
  ],
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    ReactiveFormsModule
  ]
})
export class DisciplinaModule { }
