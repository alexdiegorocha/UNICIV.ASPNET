import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoFormComponent } from './aluno-form.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoFormRoutingModule { }
