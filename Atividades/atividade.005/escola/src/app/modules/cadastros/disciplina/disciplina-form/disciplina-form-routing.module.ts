import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaFormComponent } from './disciplina-form.component';

const routes: Routes = [
  {
    path: '',
    component: DisciplinaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaFormRoutingModule { }
