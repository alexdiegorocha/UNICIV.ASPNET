import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoFormRoutingModule } from './aluno-form-routing.module';
import { AlunoFormComponent } from './aluno-form.component';
import { AlunoFormPrincipalComponent } from './aluno-form-principal/aluno-form-principal.component';
import { AlunoFormDisciplinasComponent } from './aluno-form-disciplinas/aluno-form-disciplinas.component';


@NgModule({
  declarations: [
    AlunoFormComponent,
    AlunoFormPrincipalComponent,
    AlunoFormDisciplinasComponent
  ],
  imports: [
    CommonModule,
    AlunoFormRoutingModule,
    FormsModule
  ]
})
export class AlunoFormModule { }
