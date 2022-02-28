import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurstoryComponent } from './ourstory/ourstory.component';

const routes: Routes = [
  {
    path: "ourstory",
    component: OurstoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurstoryRoutingModule { }
