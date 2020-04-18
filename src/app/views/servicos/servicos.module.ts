// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosCadastroComponent } from './servicos-cadastro.component';
import { ServicosListagemComponent } from './servicos-listagem.component';

import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  declarations: [
    ServicosListagemComponent,
    ServicosCadastroComponent
  ]
})
export class ServicosModule { }
