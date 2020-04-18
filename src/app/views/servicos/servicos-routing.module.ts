import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';
import { ServicosListagemComponent } from './servicos-listagem.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Serviços'
    },
    children: [
      {
        path: '',
        redirectTo: 'servicos'
      },
      {
        path: 'servicos',
        component: ServicosListagemComponent,
        data: {
          title: 'Serviços'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule {}
