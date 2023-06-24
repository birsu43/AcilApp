import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soru1',
  templateUrl: './soru1.page.html',
  styleUrls: ['./soru1.page.scss'],
})
export class Soru1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  soru2(){
    this.router.navigate(['/soru2']);
  }


  showSubItems1: boolean = false;

  toggleSubItems1() {
    this.showSubItems1 = !this.showSubItems1;
  }

  showSubItems2: boolean = false;

toggleSubItems2() {
  this.showSubItems2 = !this.showSubItems2;
}

showSubItems3: boolean = false;

toggleSubItems3() {
  this.showSubItems3 = !this.showSubItems3;
}
showSubItems4: boolean = false;

toggleSubItems4() {
  this.showSubItems4 = !this.showSubItems4;
}

showSubItems5: boolean = false;

toggleSubItems5() {
  this.showSubItems5 = !this.showSubItems5;
}
showSubItems6: boolean = false;

toggleSubItems6() {
  this.showSubItems6 = !this.showSubItems6;
}

showSubItems7: boolean = false;

toggleSubItems7() {
  this.showSubItems7 = !this.showSubItems7;
}

showSubItems8: boolean = false;

toggleSubItems8() {
  this.showSubItems8 = !this.showSubItems8;
}
showSubItems9: boolean = false;

toggleSubItems9() {
  this.showSubItems9 = !this.showSubItems9;
}
showSubItems10: boolean = false;

toggleSubItems10() {
  this.showSubItems10 = !this.showSubItems10;
}

showSubItems11: boolean = false;

toggleSubItems11() {
  this.showSubItems11 = !this.showSubItems11;
}

showSubItems12: boolean = false;

toggleSubItems12() {
  this.showSubItems12 = !this.showSubItems12;
}
showSubItems13: boolean = false;

toggleSubItems13() {
  this.showSubItems13 = !this.showSubItems3;
}

showSubItems14: boolean = false;

toggleSubItems14() {
  this.showSubItems14 = !this.showSubItems14;
}
showSubItems15: boolean = false;

toggleSubItems15() {
  this.showSubItems15 = !this.showSubItems15;
}

showSubItems16: boolean = false;

toggleSubItems16() {
  this.showSubItems16 = !this.showSubItems16;
}


}
