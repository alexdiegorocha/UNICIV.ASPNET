import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaListComponent } from './turma-list/turma-list.component';

const routes: Routes = [
  { path: '', component: TurmaListComponent },
  {
    path: 'incluir',
    data: { action: 'incluir' },
    loadChildren: () =>
      import('./turma-form/turma-form.module').then(
        (module) => module.TurmaFormModule
      ),
  },
  {
    path: 'listar',
    loadChildren: () =>
      import('./turma-list/turma-list.module').then(
        (module) => module.TurmaListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
    import('./turma-form/turma-form.module').then(
      (module) => module.TurmaFormModule
    ),
  },
  {
    path: ':id/editar',
    data: { action: 'editar' },
    loadChildren: () =>
    import('./turma-form/turma-form.module').then(
      (module) => module.TurmaFormModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
