import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaListComponent } from './disciplina-list/disciplina-list.component';

const routes: Routes = [
  { path: '', component: DisciplinaListComponent },
  {
    path: 'incluir',
    data: { action: 'incluir' },
    loadChildren: () =>
      import('./disciplina-form/disciplina-form.module').then(
        (module) => module.DisciplinaFormModule
      ),
  },
  {
    path: 'listar',
    loadChildren: () =>
      import('./disciplina-list/disciplina-list.module').then(
        (module) => module.DisciplinaListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
    import('./disciplina-form/disciplina-form.module').then(
      (module) => module.DisciplinaFormModule
    ),
  },
  {
    path: ':id/editar',
    data: { action: 'editar' },
    loadChildren: () =>
    import('./disciplina-form/disciplina-form.module').then(
      (module) => module.DisciplinaFormModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
