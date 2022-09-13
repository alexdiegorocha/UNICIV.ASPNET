import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'root/home',
        pathMatch: 'full',
      },
      /* Rotas do sistema */
      {
        path: 'cadastros',
        loadChildren: () =>
          import('./modules/cadastros/cadastros.module').then(
            (m) => m.CadastrosModule
          ),
      },
      {
        path: 'lancamentos',
        loadChildren: () =>
          import('./modules/lancamentos/lancamentos.module').then(
            (m) => m.LancamentosModule
          ),
      },
      {
        path: 'root',
        loadChildren: () =>
          import('./../app/modules/root/root.module').then((m) => m.RootModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
