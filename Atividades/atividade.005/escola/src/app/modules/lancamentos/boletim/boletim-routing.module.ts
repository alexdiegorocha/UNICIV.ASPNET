import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletimFormComponent } from './boletim-form/boletim-form.component';

const routes: Routes = [
  {
    path: '',
    component: BoletimFormComponent
  },
  {
    path: 'listar',
    loadChildren: () =>
      import('./boletim-list/boletim-list.module').then(
        (module) => module.BoletimListModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletimRoutingModule { }
