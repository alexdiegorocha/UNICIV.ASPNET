import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaListComponent } from './disciplina-list.component';

const routes: Routes = [
  {
    path: '',
    component: DisciplinaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaListRoutingModule { }
