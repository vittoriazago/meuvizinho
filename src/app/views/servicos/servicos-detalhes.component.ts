import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

@Component({
  templateUrl: 'servicos-detalhes.component.html'
})
export class ServicosDetalhesComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  ngOnInit(): void {
  }
}
