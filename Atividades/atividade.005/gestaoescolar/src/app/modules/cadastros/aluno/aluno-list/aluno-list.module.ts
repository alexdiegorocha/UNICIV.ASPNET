import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoListRoutingModule } from './aluno-list-routing.module';
import { AlunoListComponent } from './aluno-list.component';


@NgModule({
  declarations: [
    AlunoListComponent
  ],
  imports: [
    CommonModule,
    AlunoListRoutingModule
  ]
})
export class AlunoListModule { }
