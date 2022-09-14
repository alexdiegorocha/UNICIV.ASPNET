import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaListRoutingModule } from './disciplina-list-routing.module';
import { DisciplinaListComponent } from './disciplina-list.component';


@NgModule({
  declarations: [
    DisciplinaListComponent
  ],
  imports: [
    CommonModule,
    DisciplinaListRoutingModule
  ]
})
export class DisciplinaListModule { }
