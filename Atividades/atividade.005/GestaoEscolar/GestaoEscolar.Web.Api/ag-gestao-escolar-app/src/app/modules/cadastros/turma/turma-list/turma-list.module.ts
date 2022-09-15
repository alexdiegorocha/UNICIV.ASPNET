import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaListRoutingModule } from './turma-list-routing.module';
import { TurmaListComponent } from './turma-list.component';


@NgModule({
  declarations: [
    TurmaListComponent
  ],
  imports: [
    CommonModule,
    TurmaListRoutingModule
  ]
})
export class TurmaListModule { }
