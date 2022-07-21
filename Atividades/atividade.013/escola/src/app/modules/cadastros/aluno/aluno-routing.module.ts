import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

const routes: Routes = [
  { path: '', component: AlunoListComponent },
  {
    path: 'incluir',
    data: { action: 'incluir' },
    loadChildren: () =>
      import('./aluno-form/aluno-form.module').then(
        (module) => module.AlunoFormModule
      ),
  },
  {
    path: 'listar',
    loadChildren: () =>
      import('./aluno-list/aluno-list.module').then(
        (module) => module.AlunoListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./aluno-form/aluno-form.module').then(
        (module) => module.AlunoFormModule
      ),
  },
  {
    path: ':id/editar',
    data: { action: 'editar' },
    loadChildren: () =>
      import('./aluno-form/aluno-form.module').then(
        (module) => module.AlunoFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
