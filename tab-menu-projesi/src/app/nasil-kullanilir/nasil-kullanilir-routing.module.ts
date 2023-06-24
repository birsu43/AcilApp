import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasilKullanilirPage } from './nasil-kullanilir.page';

const routes: Routes = [
  {
    path: '',
    component: NasilKullanilirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasilKullanilirPageRoutingModule {}
