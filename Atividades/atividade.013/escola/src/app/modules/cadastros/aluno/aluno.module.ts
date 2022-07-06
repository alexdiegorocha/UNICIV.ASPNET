import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno/aluno.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlunoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AlunoModule { }
