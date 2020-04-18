// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosRoutingModule } from './servicos-routing.module';

import { ServicosCadastroComponent } from './servicos-cadastro.component';
import { ServicosListagemComponent } from './servicos-listagem.component';
import { ServicosDetalhesComponent } from './servicos-detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  declarations: [
    ServicosListagemComponent,
    ServicosDetalhesComponent,
    ServicosCadastroComponent
  ]
})
export class ServicosModule { }
