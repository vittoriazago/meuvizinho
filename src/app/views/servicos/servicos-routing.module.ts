import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosListagemComponent } from './servicos-listagem.component';
import { ServicosCadastroComponent } from './servicos-cadastro.component';
import { ServicosDetalhesComponent } from './servicos-detalhes.component';
import { MeusServicosListagemComponent } from './meus-servicos-listagem.component';
import { ServicosSolicitarComponent } from './servicos-solicitar.component';
import { ServicosSolicitadoComponent } from './servicos-solicitado.component';
import { ServicosHistoricoComponent } from './servicos-historico.component';
import { ComunidadesComponent } from './comunidades.component';
import { PedirAjudaComponent } from './pedir-ajuda.component';

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
          title: 'Listagem de serviços'
        }
      },
      {
        path: 'minha-listagem',
        component: MeusServicosListagemComponent,
        data: {
          title: 'Meus serviços'
        }
      },
      {
        path: 'detalhes',
        component: ServicosDetalhesComponent,
        data: {
          title: 'Detalhes do serviço'
        }
      },
      {
        path: 'comunidades',
        component: ComunidadesComponent,
        data: {
          title: 'Comunidades'
        }
      },
      {
        path: 'pedir-ajuda',
        component: PedirAjudaComponent,
        data: {
          title: 'Pedir Ajuda'
        }
      },
      {
        path: 'cadastro',
        component: ServicosCadastroComponent,
        data: {
          title: 'Cadastrar serviço'
        }
      },
      {
        path: 'solicitar',
        component: ServicosSolicitarComponent,
        data: {
          title: 'Solicitar serviço'
        }
      },
      {
        path: 'solicitado',
        component: ServicosSolicitadoComponent,
        data: {
          title: 'Serviço solicitado'
        }
      },
      {
        path: 'historico',
        component: ServicosHistoricoComponent,
        data: {
          title: 'Histórico de serviços'
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
