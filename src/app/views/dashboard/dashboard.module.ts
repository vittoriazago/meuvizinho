import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFXFnNwz-GVrcClYcvRNtlU1XmZq5waoY'
    })
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
