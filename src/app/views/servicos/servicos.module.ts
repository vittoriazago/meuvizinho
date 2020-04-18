// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosRoutingModule } from './servicos-routing.module';

import { ServicosCadastroComponent } from './servicos-cadastro.component';
import { ServicosListagemComponent } from './servicos-listagem.component';
import { ServicosDetalhesComponent } from './servicos-detalhes.component';
import { MeusServicosListagemComponent } from './meus-servicos-listagem.component';
import { ServicosSolicitarComponent } from './servicos-solicitar.component';
import { ServicosSolicitadoComponent } from './servicos-solicitado.component';
import { ServicosHistoricoComponent } from './servicos-historico.component';

@NgModule({
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  declarations: [
    ServicosListagemComponent,
    MeusServicosListagemComponent,
    ServicosDetalhesComponent,
    ServicosCadastroComponent,
    ServicosSolicitarComponent,
    ServicosSolicitadoComponent,
    ServicosHistoricoComponent
  ]
})
export class ServicosModule { }
