import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurstoryRoutingModule } from './ourstory-routing.module';
import { OurstoryComponent } from './ourstory/ourstory.component';


@NgModule({
  declarations: [
    OurstoryComponent
  ],
  imports: [
    CommonModule,
    OurstoryRoutingModule
  ]
})
export class OurstoryModule { }
