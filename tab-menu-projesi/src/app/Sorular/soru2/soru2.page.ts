import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soru2',
  templateUrl: './soru2.page.html',
  styleUrls: ['./soru2.page.scss'],
})
export class Soru2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 ileri(){
  this.router.navigate(['/popup2']);
 }
}
