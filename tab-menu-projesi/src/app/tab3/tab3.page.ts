import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navCtrl: NavController) {}

  sayfaAc() {
    this.navCtrl.navigateForward('/userpage');
  }
  sayfaAc2() {
    this.navCtrl.navigateForward('/nasil-kullanilir');
  }
  sayfaAc3() {
    this.navCtrl.navigateForward('/ayarlar');
  }
}
