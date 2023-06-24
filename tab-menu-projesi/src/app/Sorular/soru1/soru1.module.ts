import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Soru1PageRoutingModule } from './soru1-routing.module';

import { Soru1Page } from './soru1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Soru1PageRoutingModule
  ],
  declarations: [Soru1Page]
})
export class Soru1PageModule {}
