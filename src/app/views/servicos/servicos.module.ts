// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosListagemComponent } from './servicos-listagem.component';
import { TypographyComponent } from './typography.component';

import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServicosRoutingModule
  ],
  declarations: [
    ServicosListagemComponent,
    TypographyComponent
  ]
})
export class ServicosModule { }
