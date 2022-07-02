import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'root/home'},
  {
    path: 'cadastros',
    loadChildren: () => import('./modules/cadastros/cadastros.module').then(m => m.CadastrosModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./modules/relatorios/relatorios.module').then(m => m.RelatoriosModule)
  },
  {
    path: 'root',
    loadChildren: () => import('./core/root/root.module').then(m => m.RootModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
