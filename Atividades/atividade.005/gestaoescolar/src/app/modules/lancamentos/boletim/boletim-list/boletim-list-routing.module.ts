import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletimListComponent } from './boletim-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoletimListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletimListRoutingModule { }
