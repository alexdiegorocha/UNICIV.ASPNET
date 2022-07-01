import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'boletim',
    loadChildren: () => import('./boletim/boletim.module').then(m => m.BoletimModule)
  },
  {
    path: 'disciplinas',
    loadChildren: () => import('./disciplinas/disciplinas.module').then(m => m.DisciplinasModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
