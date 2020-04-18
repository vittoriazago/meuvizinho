import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosListagemComponent } from './servicos-listagem.component';
import { ServicosCadastroComponent } from './servicos-cadastro.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Serviços'
    },
    children: [
      {
        path: '',
        redirectTo: 'servicos/listagem'
      },
      {
        path: 'listagem',
        component: ServicosListagemComponent,
        data: {
          title: 'Serviços'
        }
      },
      {
        path: 'cadastro',
        component: ServicosCadastroComponent,
        data: {
          title: 'Cadastrar serviço'
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
