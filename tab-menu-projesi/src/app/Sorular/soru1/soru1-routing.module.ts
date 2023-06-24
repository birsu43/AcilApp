import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Soru1Page } from './soru1.page';

const routes: Routes = [
  {
    path: '',
    component: Soru1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Soru1PageRoutingModule {}
