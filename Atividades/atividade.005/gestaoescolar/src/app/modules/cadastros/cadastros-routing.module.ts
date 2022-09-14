import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aluno',
    loadChildren: () =>
      import('./aluno/aluno.module').then((module) => module.AlunoModule),
  },
  {
    path: 'disciplina',
    loadChildren: () =>
      import('./disciplina/disciplina.module').then(
        (module) => module.DisciplinaModule
      ),
  },
  {
    path: 'turma',
    loadChildren: () =>
      import('./turma/turma.module').then(
        (module) => module.TurmaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
