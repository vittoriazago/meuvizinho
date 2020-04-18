import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

@Component({
  templateUrl: 'servicos-historico.component.html'
})
export class ServicosHistoricoComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
  }
}
