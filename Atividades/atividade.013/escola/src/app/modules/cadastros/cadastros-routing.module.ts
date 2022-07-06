import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule)
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./disciplina/disciplina.module').then(m => m.DisciplinaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
