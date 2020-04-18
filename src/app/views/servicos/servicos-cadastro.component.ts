import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'servicos-cadastro.component.html'
})
export class ServicosCadastroComponent {

  cobrarServico: boolean;

  constructor(
  ) {
    this.cobrarServico = false;
  }

  changePrecificacao(event: any) {
    this.cobrarServico = event.toElement.value === 'true';
  }
}
