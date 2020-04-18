import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

@Component({
  templateUrl: 'meus-servicos-listagem.component.html'
})
export class MeusServicosListagemComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
  }
}
