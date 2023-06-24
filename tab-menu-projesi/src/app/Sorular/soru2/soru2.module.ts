import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Soru2PageRoutingModule } from './soru2-routing.module';

import { Soru2Page } from './soru2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Soru2PageRoutingModule
  ],
  declarations: [Soru2Page]
})
export class Soru2PageModule {}
