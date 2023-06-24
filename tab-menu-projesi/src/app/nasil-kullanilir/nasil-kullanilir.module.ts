import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasilKullanilirPageRoutingModule } from './nasil-kullanilir-routing.module';

import { NasilKullanilirPage } from './nasil-kullanilir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasilKullanilirPageRoutingModule
  ],
  declarations: [NasilKullanilirPage]
})
export class NasilKullanilirPageModule {}
