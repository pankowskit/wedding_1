import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './party/party.component';


@NgModule({
  declarations: [
    PartyComponent
  ],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
