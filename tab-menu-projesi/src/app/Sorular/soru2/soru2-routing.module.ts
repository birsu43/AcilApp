import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Soru2Page } from './soru2.page';

const routes: Routes = [
  {
    path: '',
    component: Soru2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Soru2PageRoutingModule {}
