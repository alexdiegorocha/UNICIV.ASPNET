import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinasRoutingModule } from './disciplinas-routing.module';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';


@NgModule({
  declarations: [
    DisciplinasComponent
  ],
  imports: [
    CommonModule,
    DisciplinasRoutingModule
  ]
})
export class DisciplinasModule { }
