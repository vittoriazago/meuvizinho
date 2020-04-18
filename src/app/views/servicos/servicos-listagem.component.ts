import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

@Component({
  templateUrl: 'servicos-listagem.component.html'
})
export class ServicosListagemComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
  }
}
